import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { RequestOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NzMxMGZjMC0yYjc1LTAxMzYtYjIyYi0wYTU4NjQ2MGI5M2QiLCJpc3MiOiJnYW1lbG9ja2Vy' +
    'IiwiaWF0IjoxNTI0NzQzMjI1LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxlcml0ZS1jb21wYW5pb24t' +
    'Y2EzZmRmMTItODYxOS00ZDIzLWI3YWYtN2MyMWYzOGRkMjdlIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.hILjtng403GUUZN8cLqdsCp8R6qn' +
    'ESkoZOeLgRcvvx4\n';
  playerId = '492'; // steam game id, in this case battlerite.
  count = 5; // how many news entry to be returned.
  maxlength = 300; // max length of each news entry.
  format = 'json'; // can be json, xml or vdf.
  link: string;

  constructor(private http: HttpClient) { }

  getPlayer() {
    const httpOptoins = {
      headers: new HttpHeaders({
        'Authorization': this.key,
        Accept: 'application/vnd.api+json'
      })
    };

    // const options = new RequestOptions({headers: this.header});
    this.link = 'https://api.dc01.gamelockerapp.com/shards/global/players/' +
      this.playerId; // actual link to the api end-point.
    return this.http.get('./assets/players/player.json');
    // return this.http.get(this.link, httpOptoins); todo revert return type
  }
}
