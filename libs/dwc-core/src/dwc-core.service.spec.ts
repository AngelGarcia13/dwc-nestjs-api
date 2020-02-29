import { Test, TestingModule } from '@nestjs/testing';
import { DwcCoreService } from './dwc-core.service';

describe('DwcCoreService', () => {
  let service: DwcCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DwcCoreService],
    }).compile();

    service = module.get<DwcCoreService>(DwcCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
