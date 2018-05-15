import { Component, OnInit } from '@angular/core';
import {PlayerStatsService} from './player-stats.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayerStatsService]
})
export class PlayerStatsComponent implements OnInit {
  playerData: any;
  att: any;
  links: any;
  meta: any;

  constructor(private playerStatsService: PlayerStatsService) { }

  ngOnInit() {
    this.playerStatsService.getPlayerStats().subscribe((data: any) => {
        console.log(data);
        this.playerData = data['data'];
        this.att = this.playerData['attributes'];
        this.links = data['links'];
        this.meta = data['meta'];
      }
    );
  }
}
