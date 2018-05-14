import { Component, OnInit } from '@angular/core';
import {PlayerStatsService} from './player-stats.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayerStatsService]
})
export class PlayerStatsComponent implements OnInit {
  players: any;
  coolPlayers: any;

  constructor(private playerStatsService: PlayerStatsService) { }

  ngOnInit() {
    this.playerStatsService.getPlayerStats().subscribe((data: any) => {
        console.log(data);
        this.players = data['players'];
        this.coolPlayers = this.players['coolPlayers'];
      }
    );
  }
}
