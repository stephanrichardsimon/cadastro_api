import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { PlansService } from './plans.service';
import { Plans } from '@prisma/client';
import { CreatePlanDto } from './dto/create-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private plansService: PlansService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPlan(@Body() planData: CreatePlanDto): Promise<Plans> {
    return this.plansService.createPlan(planData);
  }
}
