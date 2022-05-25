import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FileModule } from './file-service/file.module';

@Module({
  imports: [UserModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
