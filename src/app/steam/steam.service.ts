import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor(private http: HttpClient) { }

  steamuser: any;

  getSteamUser() {
    try {
      this.steamuser = window.location.search.substr(1);
    } catch (e) {

    }
    console.log(this.steamuser);
    return this.steamuser;
  }
}
