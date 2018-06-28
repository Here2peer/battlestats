import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player-services/player.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  playerlist: any;
  players: any;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getLeaderboard();
  }

  convertTime(seconds) {
    console.log(seconds)
    const minutes = seconds / 60;
    console.log(minutes);
    const hours = minutes / 60;
    console.log(hours);
    return Math.ceil(hours);
  }

  getLeaderboard() {
    this.playerService.getAllPlayers().subscribe((data: any) => {
      this.playerlist = data;
      console.log(this.playerlist);
    });
  }

  sortData(sort: Sort) {
    const data = this.playerlist.slice();
    if (!sort.active || sort.direction === '') {
      this.playerlist = data;
      return;
    }

    this.playerlist = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Player name':
          return compare(a.battlerite_name, b.battlerite_name, isAsc);
        case 'Winrate':
          return compare(a.winrate, b.winrate, isAsc);
        case 'Time Played':
          return compare(a.time_played, b.time_played, isAsc);
        case 'Ranked 2v2 wins':
          return compare(+a.twov2_ranked_wins, +b.twov2_ranked_wins, isAsc);
        case 'Ranked 3v3 wins':
          return compare(+a.threev3_ranked_wins, +b.threev3_ranked_wins, isAsc);
        case 'Unranked 2v2 wins':
          return compare(+a.twov2_unranked_wins, +b.twov2_unranked_wins, isAsc);
        case 'Unranked 3v3 wins':
          return compare(+a.threev3_unranked_wins, +b.threev3_unranked_wins, isAsc);
        default:
          return 0;
      }
    });

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
