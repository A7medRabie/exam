import { TestBed } from '@angular/core/testing';

import { ExmasService } from './exams.service';

describe('ExmasService', () => {
  let service: ExmasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExmasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
