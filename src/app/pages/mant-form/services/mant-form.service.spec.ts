import { TestBed } from '@angular/core/testing';

import { MantFormService } from './mant-form.service';

describe('MantFormService', () => {
  let service: MantFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
