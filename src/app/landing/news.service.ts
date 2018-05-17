import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'isomorphic-fetch';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  key = '47E81668C8A02D8BC4341E13C666BE0B\n';
  appid = '504370'; // steam game id, in this case battlerite.
  count = 10; // how many news entry to be returned.
  maxlength = 100; // max length of each news entry.
  format = 'json'; // can be json, xml or vdf.
  link = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' +
    this.appid + '&count=' + this.count + '&maxlength=' + this.maxlength + '&format=' + this.format; // actual link to the api end-point.


  constructor(private http: HttpClient) { }

  public async fetch(
    requestMethod: 'GET' | 'POST',
  ) {
    const req = {
      ...(requestMethod === 'POST' ? {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('appnews'),
      } : {}),
      ...{ method: requestMethod },
    };
    const res = await fetch(this.link, req);
    if (!res.ok) { throw new Error(`unexpected status ${res.status}`); }
    return res.json();
  }
}

