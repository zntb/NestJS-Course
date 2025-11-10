export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
}

export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'John',
      age: 30,
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      gender: 'female',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User) {
    this.users.push(user);
  }
}
