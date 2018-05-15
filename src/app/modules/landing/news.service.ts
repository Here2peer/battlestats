import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RequestOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  appid = '504370'; // steam game id, in this case battlerite.
  count = 5; // how many news entry to be returned.
  maxlength = 300; // max length of each news entry.
  format = 'json'; // can be json, xml or vdf.
  link: string;

  constructor(private http: HttpClient) { }

  getNews() {
    console.log(this.appid);

    // const header = new Headers();
    // header.append('Access-Control-Allow-Origin', 'GET');

    // const options = new RequestOptions({headers: this.header});
    this.link = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' +
      this.appid + '&count=' + this.count + '&maxlength=' + this.maxlength + '&format=' + this.format; // actual link to the api end-point.
    return this.http.get(this.link);
  }
}
