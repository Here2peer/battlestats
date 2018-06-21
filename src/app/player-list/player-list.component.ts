import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../player-services/player.service';
import {query} from '@angular/animations';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  search: number;
  playername: string;
  playerlist;

  constructor(private route: ActivatedRoute, private router: Router ,private playerService: PlayerService) { }

  ngOnInit() {
    this.searchPlayers();
  }

  searchPlayers() {
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      if (this.search !== undefined) {
        this.playername = params['playername'];
        this.playerService.getPlayer(this.playername, false).subscribe((data: any) => {
          this.playerlist = data.data;
        });
      } else {
        this.playerService.getAllPlayers().subscribe((data: any) => {
          this.playerlist = data;
          console.log(this.playerlist);
        });
      }
    });
  }
}
