import { Injectable } from '@nestjs/common';
import { File } from '../file-service/interfaces/file.interface';
import { FileService } from '../file-service/file.service';
import { UserService } from '../user/user.service';

@Injectable()
export class ProfilePictureService {
  constructor(
    private readonly fileService: FileService,
    private readonly userService: UserService,
  ) {}

  public async addUserProfilePicture(userId: string, pictureId: string) {
    const picture = await this.fileService.getById(pictureId);
    // update user with the picture url
    return { id: userId, name: 'Sam', profilePictureId: picture.id };
  }

  public async getUserProfilePicture(userId: string): Promise<File> {
    const user = await this.userService.getUserById(userId);
    return this.fileService.getById(user.profilePictureId);
  }
}
