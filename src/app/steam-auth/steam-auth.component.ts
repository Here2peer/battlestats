import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-steam-auth',
  templateUrl: './steam-auth.component.html',
  styleUrls: ['./steam-auth.component.css']
})
export class SteamAuthComponent implements OnInit {
  steamid: any;
  api = '47E81668C8A02D8BC4341E13C666BE0B';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['steamid'] !== undefined) {
        this.steamid = params['steamid'];
      }});
  }

}
