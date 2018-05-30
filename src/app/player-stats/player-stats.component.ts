import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PlayerStatsService} from './player-stats.service';
import {PlayerService} from './player.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayerStatsService, PlayerService]
})

export class PlayerStatsComponent implements OnInit {
  playerData: any;
  attribute: any;
  stats: any;
  customstats: any;
  links: any;
  meta: any;
  statsMapping: any;
  gitMapping: any;

  championIds: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22 , 23, 25, 26, 27, 28, 29, 30, 31, 38, 40, 41};
  categories: {11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000,
    21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 40000};

  constructor(private playerStatsService: PlayerStatsService,
              private playerService: PlayerService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    let player_name = 'Joltz';
    this.route.params.subscribe(params => {
      if (params['player'] === undefined) {
        player_name = 'Joltz';
      } else {
        player_name = params['player'];
      }
    });
    this.playerService.getPlayer(player_name, false).subscribe((data: any) => {
        this.playerData = data['data'][0];
        this.attribute = this.playerData['attributes'];
        this.stats = this.attribute['stats'];
        this.customstats = this.attribute['customstats'];
        this.links = data['links'];
        this.meta = data['meta'];
      }
    );

    this.playerStatsService.getStatsMapping().subscribe((data: any) => {
        // console.log(data);
        this.statsMapping = data;
      }
    );

    this.playerStatsService.getGitMapping().subscribe((data: any) => {
        this.gitMapping = data.Mappings;
      }
    );
  }
}

