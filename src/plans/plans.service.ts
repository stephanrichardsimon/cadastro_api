import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plans } from '@prisma/client';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async createPlan(data: {
    title: string;
    description: string;
    value: number;
  }): Promise<Plans> {
    return this.prisma.plans.create({
      data,
    });
  }
}
