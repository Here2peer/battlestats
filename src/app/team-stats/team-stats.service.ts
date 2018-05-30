import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamStatsService {
  constructor(private http: HttpClient) {}

  getTeamStats(playerName: string) {
    return this.http.get('http://127.0.0.1:5000/team?player=' + playerName);
  }
}
