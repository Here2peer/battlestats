import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) {}

  getNewGameplay() {
    // return this.http.get('./assets/champions/newgameplay.json');
    return this.http.get('http://127.0.0.1:5000/champions');
  }
}
