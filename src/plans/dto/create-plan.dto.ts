import { IsString, IsInt, IsNotEmpty, Min, MaxLength } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsInt()
  @Min(0)
  value: number;
}
