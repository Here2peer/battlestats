import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  constructor(private http: HttpClient) {}

  getChampions() {
    return this.http.get('./assets/champions/champions.json');
  }
  getGameplay() {
    return this.http.get('./assets/champions/gameplay.json');
  }
  getNewGameplay() {
    // return this.http.get('./assets/champions/newgameplay.json');
    return this.http.get('http://127.0.0.1:5000/gameplay');
  }
  getEnglishTexts() {
    return this.http.get('./assets/champions/English.json');
  }

}
