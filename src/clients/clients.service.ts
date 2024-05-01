import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async getAllClients() {
    return this.prisma.clients.findMany();
  }

  async getClientById(id: number) {
    const client = await this.prisma.clients.findUnique({
      where: { id: Number(id) },
    });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async createClient(data: CreateClientDto) {
    return this.prisma.clients.create({
      data,
    });
  }

  async updateClient(id: number, data: UpdateClientDto) {
    return await this.prisma.clients.update({
      where: { id: Number(id) },
      data,
    });
  }

  async removeClient(id: number) {
    await this.prisma.clients.delete({
      where: { id: Number(id) },
    });
    return;
  }
}
