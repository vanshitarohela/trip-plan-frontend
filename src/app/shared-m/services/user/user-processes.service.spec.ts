import { TestBed } from '@angular/core/testing';

import { UserProcessesService } from './user-processes.service';

describe('UserProcessesService', () => {
  let service: UserProcessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProcessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
