import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FileModule } from './file-service/file.module';
import { ProfilePictureModule } from './profile-picture/profile-picture.module';

@Module({
  imports: [UserModule, FileModule, ProfilePictureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
