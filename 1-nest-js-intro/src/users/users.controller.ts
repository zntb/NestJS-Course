import { Controller, Get, Param, Post } from '@nestjs/common';
import { User, UsersService } from './users.service';

// http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers(): User[] {
    const userService = new UsersService();
    return userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    const userService = new UsersService();
    return userService.getUserById(+id);
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
