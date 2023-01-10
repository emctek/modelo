import { TestBed } from '@angular/core/testing';

import { YoService } from './yo.service';

describe('YoService', () => {
  let service: YoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
