import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ToursController } from './tours.controller';
// import { ToursService } from './tours.service';
import { ToursEntity } from './tours.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToursEntity])],
  //   controllers: [UsersController],
  //   providers: [UsersService],
})
export class UsersModule {}
