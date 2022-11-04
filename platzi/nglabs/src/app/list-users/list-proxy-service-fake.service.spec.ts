import { TestBed } from '@angular/core/testing';

import { ListProxyServiceFakeService } from './list-proxy-service-fake.service';

describe('ListProxyServiceFakeService', () => {
  let service: ListProxyServiceFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProxyServiceFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
