import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayer(playerName: string, id: boolean) {
    if (id) {
      return this.http.get('http://127.0.0.1:5000/player?player=' + playerName + '&id=true');
    } else {
      return this.http.get('http://127.0.0.1:5000/player?player=' + playerName);
    }
  }
}
