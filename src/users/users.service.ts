import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return users;
  }

  async getUserById(id: number): Promise<Users> {
    const user = await this.prisma.users.findUnique({
      where: { id: Number(id) },
    });
    return user;
  }

  async createUser(data: CreateUserDto): Promise<Users> {
    if (!data.name) {
      throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
    }
    if (!data.email) {
      throw new HttpException('E-mail is required', HttpStatus.BAD_REQUEST);
    }
    if (!data.password) {
      throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<Users> {
    return this.prisma.users.update({
      where: { id: Number(id) },
      data: data,
    });
  }

  async removeUser(id: number): Promise<Users> {
    return this.prisma.users.delete({
      where: { id: Number(id) },
    });
  }
}
