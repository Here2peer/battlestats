import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {
  constructor(private http: HttpClient) {}

  getStatsMapping() {
    return this.http.get('./assets/players/statsMapping.json');
  }

  getGitMapping() {
    return this.http.get('./assets/players/gitMappings.json');
  }

}
