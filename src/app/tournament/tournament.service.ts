import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getChampions() {
    return this.http.get('./assets/champions/champions.json');
  }
  getGameplay() {
    return this.http.get('./assets/champions/gameplay.json');
  }
  getNewGameplay() {
    return this.http.get('./assets/champions/newgameplay.json');
  }
  getEnglishTexts() {
    return this.http.get('./assets/champions/English.json');
  }

}
