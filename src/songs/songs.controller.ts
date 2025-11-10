import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create one song';
  }
  @Get()
  findAll() {
    return 'find all songs';
  }
  @Get(':id')
  findOne() {
    return 'find one song';
  }
  @Put(':id')
  update() {
    return 'update one song';
  }
  @Delete(':id')
  remove() {
    return 'remove one song';
  }
}
