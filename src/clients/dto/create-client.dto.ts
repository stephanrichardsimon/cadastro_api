import { IsEmail, IsInt, IsNotEmpty, MaxLength, Min } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsNotEmpty()
  @MaxLength(11)
  cpf: string;

  @IsInt()
  @Min(1)
  planId: number;
}
