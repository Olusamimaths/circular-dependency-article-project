import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FileModule } from '../file-service/file.module';
import { FileService } from '../file-service/file.service';

@Module({
  providers: [UserService, FileService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
