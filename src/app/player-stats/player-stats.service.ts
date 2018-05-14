import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {
  constructor(private http: HttpClient) {}

  getPlayerStats() {
    return this.http.get('./assets/players/players.json');
  }

}
