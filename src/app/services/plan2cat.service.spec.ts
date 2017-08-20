import { TestBed, inject } from '@angular/core/testing';

import { Plan2catService } from './plan2cat.service';

describe('Plan2catService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Plan2catService]
    });
  });

  it('should be created', inject([Plan2catService], (service: Plan2catService) => {
    expect(service).toBeTruthy();
  }));
});
