import { TestBed } from '@angular/core/testing';

import { WorkerProfileService } from './worker-profile.service';

describe('WorkerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerProfileService = TestBed.get(WorkerProfileService);
    expect(service).toBeTruthy();
  });
});
