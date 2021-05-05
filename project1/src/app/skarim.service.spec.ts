import { TestBed } from '@angular/core/testing';

import { SkarimService } from './skarim.service';

describe('SkarimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkarimService = TestBed.get(SkarimService);
    expect(service).toBeTruthy();
  });
});
