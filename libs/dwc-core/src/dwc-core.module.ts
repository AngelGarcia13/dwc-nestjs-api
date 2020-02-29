import { Module } from '@nestjs/common';
import { DwcCoreService } from './dwc-core.service';

@Module({
  providers: [DwcCoreService],
  exports: [DwcCoreService],
})
export class DwcCoreModule {}
