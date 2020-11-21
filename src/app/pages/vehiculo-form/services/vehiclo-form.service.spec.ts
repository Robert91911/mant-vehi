import { TestBed } from '@angular/core/testing';

import { VehicloFormService } from './vehiclo-form.service';

describe('VehicloFormService', () => {
  let service: VehicloFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicloFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
