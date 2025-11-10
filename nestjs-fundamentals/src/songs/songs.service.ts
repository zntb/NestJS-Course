import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song: any) {
    // save to db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
