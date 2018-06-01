import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getTournamentList(userID) {
    userID = '00000001';
    return this.http.get('./assets/tournaments/tournaments_p' + userID + '.json');
  }

  getTournamentData() {
    return this.http.get('./assets/tournaments/tournament_00000002.json');
  }
}
