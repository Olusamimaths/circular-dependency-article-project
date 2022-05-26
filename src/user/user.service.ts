import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public async getUserById(userId: string) {
    // actual work of retrieving user
    return {
      id: userId,
      name: 'Sam',
      profilePictureId: 'kdkf43',
    };
  }
}
