import { IsInt, IsString, MinLength, MaxLength, Min } from 'class-validator';

export class UpdatePlanDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @IsString()
  @MinLength(10)
  @MaxLength(300)
  description: string;

  @IsInt()
  @Min(0)
  value: number;
}
