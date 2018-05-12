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

}
