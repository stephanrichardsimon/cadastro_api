// src/clients/clients.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  getAllClients() {
    return this.clientsService.getAllClients();
  }

  @Get(':id')
  getClientById(@Param('id') id: number) {
    return this.clientsService.getClientById(id);
  }

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto);
  }

  @Patch(':id')
  updateClient(
    @Param('id') id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  removeClient(@Param('id') id: number) {
    return this.clientsService.removeClient(id);
  }
}
