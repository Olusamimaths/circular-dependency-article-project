import { Injectable } from '@nestjs/common';
import { FileService } from 'src/file-service/file.service';

@Injectable()
export class UserService {
  constructor(private readonly fileService: FileService) {}

  public async getUserById(userId: string) {
    // actual work of retrieving user
    return {
      id: userId,
      name: 'Sam',
      profilePictureUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    };
  }

  public async addFile(userId: string, pictureId: string) {
    const picture = await this.fileService.getById(pictureId);
    // update user with the picture url
    return { id: userId, name: 'Sam', profilePictureUrl: picture.url };
  }
}
