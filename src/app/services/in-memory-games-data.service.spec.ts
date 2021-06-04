import { TestBed } from '@angular/core/testing';

import { InMemoryGamesDataService } from './in-memory-games-data.service';

describe('InMemoryGamesDataService', () => {
  let service: InMemoryGamesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryGamesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
