import { TestBed } from '@angular/core/testing';

import { DataServiceServiceService } from './data-service-service.service';

describe('DataServiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceServiceService = TestBed.get(DataServiceServiceService);
    expect(service).toBeTruthy();
  });
});
