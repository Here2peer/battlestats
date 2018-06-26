import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { PlayerStatsService} from '../player-stats/player-stats.service';

@Component({
  selector: 'app-steam-auth',
  templateUrl: './steam-auth.component.html',
  styleUrls: ['./steam-auth.component.css'],
  providers: [PlayerStatsService]
})
export class SteamAuthComponent implements OnInit {
  steamid: any;
  api = '47E81668C8A02D8BC4341E13C666BE0B';
  img_path: any;
  constructor(private route: ActivatedRoute, private playerstatsservice: PlayerStatsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['steamid'] !== undefined) {
        this.steamid = params['steamid'];
        let avatarurl: any;
        this.playerstatsservice.getAvatar(this.steamid).subscribe((data => {
          avatarurl = data['url'];
          this.img_path = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/' + avatarurl;
        }));
      }});

  }

}
