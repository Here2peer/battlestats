import { TestBed, inject } from '@angular/core/testing';

import { TeamStatsService } from './team-stats.service';

describe('PlayerStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamStatsService]
    });
  });

  it('should be created', inject([TeamStatsService], (service: TeamStatsService) => {
    expect(service).toBeTruthy();
  }));
});
