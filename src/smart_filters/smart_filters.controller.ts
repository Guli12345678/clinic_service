import { Controller } from '@nestjs/common';
import { SmartFiltersService } from './smart_filters.service';

@Controller('smart-filters')
export class SmartFiltersController {
  constructor(private readonly smartFiltersService: SmartFiltersService) {}
}
