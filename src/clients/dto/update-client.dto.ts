import { IsOptional, IsEmail, IsInt, Min, MaxLength } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @MaxLength(11)
  cpf?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  planId?: number;
}
