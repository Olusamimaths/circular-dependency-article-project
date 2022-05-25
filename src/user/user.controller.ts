import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  public async getUserById(userId: string) {
    return await this.userService.getUserById(userId);
  }
}
