import { TestBed, inject } from '@angular/core/testing';

import { TournamentService } from './tournament.service';

describe('Tournamentservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentService]
    });
  });

  it('should be created', inject([TournamentService], (service: TournamentService) => {
    expect(service).toBeTruthy();
  }));
});
