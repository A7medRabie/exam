import { TestBed } from '@angular/core/testing';

import { SubjectQuizesService } from './subject-quizes.service';

describe('SubjectQuizesService', () => {
  let service: SubjectQuizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectQuizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
