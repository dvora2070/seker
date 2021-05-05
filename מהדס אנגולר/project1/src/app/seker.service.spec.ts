import { TestBed } from '@angular/core/testing';

import { SekerService } from './seker.service';

describe('SekerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SekerService = TestBed.get(SekerService);
    expect(service).toBeTruthy();
  });
});
