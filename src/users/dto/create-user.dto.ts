import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
  IsInt,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @IsInt()
  @IsNotEmpty()
  planId: number;
}
