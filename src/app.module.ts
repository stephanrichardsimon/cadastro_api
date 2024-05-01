import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from './prisma/prisma.module';
import { PlansModule } from './plans/plans.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '123',
      username: 'postgres',
      entities: [],
      database: 'cadastro',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PrismaModule,
    PlansModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
