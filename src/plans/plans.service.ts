import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plan } from '@prisma/client';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async createPlan(data: {
    title: string;
    description: string;
    value: number;
  }): Promise<Plan> {
    return this.prisma.plan.create({
      data,
    });
  }
}
