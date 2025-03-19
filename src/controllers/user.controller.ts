import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: Partial<User>): Promise<User> {
    return this.userService.create(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
