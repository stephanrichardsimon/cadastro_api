import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { Plans } from '@prisma/client';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private plansService: PlansService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllPlans() {
    return this.plansService.getAllPlans();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getPlanById(@Param('id') id: number): Promise<Plans> {
    return this.plansService.getPlanById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPlan(@Body() planData: CreatePlanDto): Promise<Plans> {
    return this.plansService.createPlan(planData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updatePlan(
    @Param('id') id: number,
    @Body() updatePlanDto: UpdatePlanDto,
  ) {
    return this.plansService.updatePlan(id, updatePlanDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deletePlan(@Param('id') id: number) {
    await this.plansService.deletePlan(id);
    return;
  }
}
