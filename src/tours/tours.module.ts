import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ToursController } from './tours.controller';
// import { ToursService } from './tours.service';
import { ToursEntity } from './tours.entity';
import { ToursService } from './tours.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToursEntity])],
  providers: [ToursService],
  //   controllers: [UsersController],
  //   providers: [UsersService],
})
export class UsersModule {}
