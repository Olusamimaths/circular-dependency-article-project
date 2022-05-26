import { Injectable } from '@nestjs/common';
import { File } from './interfaces/file.interface';

@Injectable()
export class FileService {
  public getById(pictureId: string): File {
    return {
      id: pictureId,
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    };
  }
}
