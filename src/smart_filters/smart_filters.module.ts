import { Module } from '@nestjs/common';
import { SmartFiltersService } from './smart_filters.service';
import { SmartFiltersController } from './smart_filters.controller';

@Module({
  imports: [],
  controllers: [SmartFiltersController],
  providers: [SmartFiltersService],
})
export class SmartFiltersModule {}
