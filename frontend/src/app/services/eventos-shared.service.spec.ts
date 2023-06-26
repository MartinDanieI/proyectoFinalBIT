import { TestBed } from '@angular/core/testing';

import { EventosSharedService } from './eventos-shared.service';

describe('EventosSharedService', () => {
  let service: EventosSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
