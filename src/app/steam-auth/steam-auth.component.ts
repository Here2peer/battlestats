import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-steam-auth',
  templateUrl: './steam-auth.component.html',
  styleUrls: ['./steam-auth.component.css']
})
export class SteamAuthComponent implements OnInit {
  steamid: any;
  api = '47E81668C8A02D8BC4341E13C666BE0B';
  img_path: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['steamid'] !== undefined) {
        this.steamid = params['steamid'];
      }});
    this.img_path = this.http.get('https://127.0.0.1:5000/avatar');
  }

}
