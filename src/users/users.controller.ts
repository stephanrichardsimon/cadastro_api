// src/users/user.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }
}
