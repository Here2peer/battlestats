import { Component, OnInit } from '@angular/core';
import {TeamStatsService} from './team-stats.service';
import { PlayerService } from '../player-stats/player.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css'],
  providers: [TeamStatsService]
})
export class TeamStatsComponent implements OnInit {

  teamstats: any;
  teamStatsFetched: boolean;

  playerData: any;
  attribute: any;
  stats: any;
  customstats: any;

  constructor(private teamStatsService: TeamStatsService,
              private playerService: PlayerService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    let player_name = 'Joltz';
    this.route.params.subscribe(params => {
      if (params['player'] !== undefined) {
        player_name = params['player'];
      }
    });
    this.teamStatsService.getTeamStats(player_name).subscribe((data: any) => {
      this.teamstats = data;
    });
    this.playerService.getPlayer(player_name, false).subscribe((data: any) => {
        this.playerData = data['data'][0];
        this.attribute = this.playerData['attributes'];
        this.stats = this.attribute['stats'];
        this.customstats = this.attribute['customstats'];
      }
    );
  }
}
