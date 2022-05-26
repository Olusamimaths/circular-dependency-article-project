import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { File } from './interfaces/file.interface';

@Injectable()
export class FileService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  public getById(pictureId: string): File {
    return {
      id: pictureId,
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    };
  }

  public async getUserProfilePicture(userId: string): Promise<File> {
    const user = await this.userService.getUserById(userId);
    return this.getById(user.id);
  }
}
