// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role, // Role é opcional na DTO
        planId: data.planId, // Essencial de acordo com o seu modelo
      },
    });
  }
}
