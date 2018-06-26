import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class TournamentService {
  constructor(private http: HttpClient) {}

  getTournamentList(userID) {
    return this.http.get('http://localhost:5000/tournament/tournamentList?playerID=' + userID);
    // return this.http.get('./assets/tournaments/tournaments_p' + userID + '.json');
  }

  getTournamentData(tournamentID) {
    return this.http.get('http://localhost:5000/tournament?tournamentID=' + tournamentID);
    // return this.http.get('./assets/tournaments/tournament_' + tournamentID + '.json');
  }

  getAllTourneys() {
    return this.http.get('http://localhost:5000/tournaments');
  }
}
