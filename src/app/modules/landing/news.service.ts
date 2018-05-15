import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { RequestOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key = '47E81668C8A02D8BC4341E13C666BE0B\n';
  appid = '504370'; // steam game id, in this case battlerite.
  count = 5; // how many news entry to be returned.
  maxlength = 300; // max length of each news entry.
  format = 'json'; // can be json, xml or vdf.
  link: string;

  constructor(private http: HttpClient) { }

  getNews() {
    console.log(this.appid);

    // const header = new Headers();
    const httpOptoins = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'localhost:4200',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Credentials': 'false',
        'Content-Type': 'applicationi/x-www-form-urlencoded',
        'Authorization': this.key
      })
    };

    // const options = new RequestOptions({headers: this.header});
    this.link = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' +
      this.appid + '&count=' + this.count + '&maxlength=' + this.maxlength + '&format=' + this.format; // actual link to the api end-point.
    return this.http.get(this.link, httpOptoins);
  }
}
