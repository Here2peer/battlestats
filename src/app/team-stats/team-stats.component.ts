import { Component, OnInit } from '@angular/core';
import {TeamStatsService} from './team-stats.service';
import { PlayerService } from '../player-services/player.service';
import {ActivatedRoute} from '@angular/router';
import {Sort} from '@angular/material';

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
  error: any;

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
      if (!data['errors']) {
        this.teamstats = data;
        console.log(this.teamstats);
      } else {
        this.error = data['errors'][0]['title'];
      }
    });
    this.playerService.getPlayer(player_name, false).subscribe((data: any) => {
        this.playerData = data['data'][0];
        this.attribute = this.playerData['attributes'];
        this.stats = this.attribute['stats'];
        this.customstats = this.attribute['customstats'];
      }
    );
  }

  sortData(sort: Sort) {
    const data = this.teamstats.slice();
    if (!sort.active || sort.direction === '') {
      this.teamstats = data;
      return;
    }

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }


    this.teamstats = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Games left': return compare(a.attributes.stats.placementGamesLeft, b.attributes.stats.placementGamesLeft, isAsc);
        case 'Wins': return compare(a.attributes.stats.wins, b.attributes.stats.wins, isAsc);
        case 'Losses': return compare(a.attributes.stats.losses, b.attributes.stats.losses, isAsc);
        case 'League': return compare(a.attributes.stats.league, b.attributes.stats.league, isAsc);
        case 'Division': return compare(a.attributes.stats.division, b.attributes.stats.division, isAsc);
        case 'Top division': return compare(a.attributes.stats.topDivision, b.attributes.stats.topDivision, isAsc);
        case 'Top League': return compare(a.attributes.stats.topLeague, b.attributes.stats.topLeague, isAsc);
        default: return 0;
      }
    });
  }
}
