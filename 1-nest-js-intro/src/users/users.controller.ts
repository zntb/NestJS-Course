import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { User, UsersService } from './users.service';

// http://localhost:3000/users
@Controller('users')
export class UsersController {
  userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): User[] {
    console.log(limit, page);
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const userService = new UsersService();
    return userService.getUserById(id);
  }

  @Post()
  createUser() {
    const user: User = {
      id: 3,
      name: 'Brad',
      age: 30,
      gender: 'male',
      isMarried: true,
    };
    const userService = new UsersService();
    userService.createUser(user);

    return `User with id ${user.id} has been created.`;
  }
}
