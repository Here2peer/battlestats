import {AfterViewInit, Component} from '@angular/core';
import {PlayerStatsService} from './player-stats.service';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
  providers: [PlayerStatsService, PlayerService]
})

export class PlayerStatsComponent implements AfterViewInit {
  playerData: any;
  attribute: any;
  stats: any;
  customstats: any;
  links: any;
  meta: any;
  statsMapping: any;
  gitMapping: any;

  constructor(private playerStatsService: PlayerStatsService, private playerService: PlayerService) { }

  ngAfterViewInit() {
    this.playerService.getPlayer().subscribe((data: any) => {
        console.log(data);
        this.playerData = data['data'];
        this.attribute = this.playerData['attributes'];
        this.stats = this.attribute['stats'];
        this.customstats = this.attribute['customstats'];
        this.links = data['links'];
        this.meta = data['meta'];
      }
    );
    this.playerStatsService.getStatsMapping().subscribe((data: any) => {
        console.log(data);
        this.statsMapping = data;
      }
    );
    this.playerStatsService.getGitMapping().subscribe((data: any) => {
        this.gitMapping = data.Mappings;
      }
    );
  }
}

