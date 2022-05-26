import { Module } from '@nestjs/common';
import { FileModule } from '../file-service/file.module';
import { UserModule } from '../user/user.module';
import { ProfilePictureService } from './profile-picture.service';

@Module({
  imports: [FileModule, UserModule],
  providers: [ProfilePictureService],
})
export class ProfilePictureModule {}
