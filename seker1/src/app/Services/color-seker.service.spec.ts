import { TestBed } from '@angular/core/testing';

import { ColorSekerService } from './color-seker.service';

describe('ColorSekerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorSekerService = TestBed.get(ColorSekerService);
    expect(service).toBeTruthy();
  });
});
