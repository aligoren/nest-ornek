import { Module } from '@nestjs/common';
import { HomeController } from './controllers/base.controller';
import { HomeService } from './services/base.service';
@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class AppModule {}
