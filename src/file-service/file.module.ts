import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { FileService } from './file.service';

@Module({
  providers: [FileService, UserService],
  exports: [FileService],
})
export class FileModule {}
