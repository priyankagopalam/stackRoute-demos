import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Peter' },
  ];

  getUserId(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user)
      throw new NotFoundException('User does not exists');
    return user;
  }
}
