import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamStatsService {
  constructor(private http: HttpClient) {}

  getStatsMapping() {
    return this.http.get('./assets/players/statsMapping.json');
  }

  getTeamStats() {
    return this.http.get('./assets/players/gitMappings.json');
  }
}
