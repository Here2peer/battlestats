import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../player-services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playername: string;
  playerlist;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.playername = params['playername'];
      this.playerService.getPlayer(this.playername, false).subscribe((data: any) => {
        this.playerlist = data.data;
        console.log(this.playerlist);
      });
    });
  }

}
