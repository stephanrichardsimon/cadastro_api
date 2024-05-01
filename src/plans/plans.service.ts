import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plans } from '@prisma/client';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async getAllPlans() {
    const plans = await this.prisma.plans.findMany({
      select: {
        id: true,
        title: true,
        value: true,
        Client: true,
      },
    });
    return plans;
  }

  async getPlanById(id: number): Promise<Plans> {
    const plan = await this.prisma.plans.findUnique({
      where: { id: Number(id) },
    });
    return plan;
  }

  async createPlan(data: CreatePlanDto): Promise<Plans> {
    return this.prisma.plans.create({
      data,
    });
  }

  async updatePlan(id: number, data: UpdatePlanDto): Promise<Plans> {
    return this.prisma.plans.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deletePlan(id: number): Promise<Plans> {
    return this.prisma.plans.delete({
      where: { id: Number(id) },
    });
  }
}
