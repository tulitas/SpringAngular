import { TestBed } from '@angular/core/testing';

import { JoinQueryService } from './join-query.service';

describe('JoinQueryService', () => {
  let service: JoinQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
