import { TestBed } from '@angular/core/testing';

import { RestPhoneService } from './rest-phone.service';

describe('RestPhoneService', () => {
  let service: RestPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
