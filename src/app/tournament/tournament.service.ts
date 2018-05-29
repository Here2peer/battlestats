import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getTournamentData() {
    return this.http.get('./assets/tournaments/tournament_00000001.json');
  }

}
