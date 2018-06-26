import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor(private http: HttpClient) { }

  getSteamUser() {
    return this.http.get('http://127.0.0.1:5000/steamuser');
  }
}
