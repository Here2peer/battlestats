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

  getAvatar(steamid) {
    const url = 'http://127.0.0.1:5000/avatar?steamid=' + steamid;
    return this.http.get(url);
  }

}
