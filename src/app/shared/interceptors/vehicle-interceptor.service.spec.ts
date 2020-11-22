import { TestBed } from '@angular/core/testing';

import { VehicleInterceptorService } from './vehicle-interceptor.service';

describe('VehicleInterceptorService', () => {
  let service: VehicleInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
