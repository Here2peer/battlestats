import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PlayerStatsService} from './player-stats.service';
import {PlayerService} from '../player-services/player.service';
import {ActivatedRoute} from '@angular/router';
import {Sort} from '@angular/material';

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
  sortedData;
  unsortedData = new Array;
  filteredMapping;
  searched: any;


  championIds: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22 , 23, 25, 26, 27, 28, 29, 30, 31, 38, 40, 41};
  categories: {11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000,
    21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 40000};

  constructor(private playerStatsService: PlayerStatsService,
              private playerService: PlayerService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.getPlayerData();
  }

  getPlayerData() {
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
        // this.sortedData = this.stats.slice();
        for (this.filteredMapping of this.gitMapping) {
          if (this.filteredMapping.StackableId > 11000 && this.filteredMapping.StackableId < 12000) {
            if (this.filteredMapping.EnglishLocalizedName === undefined) {
              this.filteredMapping.EnglishLocalizedName = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 5000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 5000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 6000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 6000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 7000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 7000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 8000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 8000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 9000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 9000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 10000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 10000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 11000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 11000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 12000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 12000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 13000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 13000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 14000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 14000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 15000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 15000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 16000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 16000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 17000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 17000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 1000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 1000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 2000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 2000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId + 29000] === undefined) {
              this.stats[this.filteredMapping.StackableId + 29000] = 0;
            }

            if (this.stats[this.filteredMapping.StackableId] === undefined) {
              this.stats[this.filteredMapping.StackableId] = 0;
            }

            const hours = this.convertTime(this.stats[this.filteredMapping.StackableId + 5000]);
            this.unsortedData.push(
              {
                name: this.filteredMapping.EnglishLocalizedName,
                time: hours,
                rwins2: this.stats[this.filteredMapping.StackableId + 6000],
                rloss2: this.stats[this.filteredMapping.StackableId + 7000],
                rwins3: this.stats[this.filteredMapping.StackableId + 8000],
                rloss3: this.stats[this.filteredMapping.StackableId + 9000],
                uwins2: this.stats[this.filteredMapping.StackableId + 10000],
                uloss2: this.stats[this.filteredMapping.StackableId + 11000],
                uwins3: this.stats[this.filteredMapping.StackableId + 12000],
                uloss3: this.stats[this.filteredMapping.StackableId + 13000],
                bwins: this.stats[this.filteredMapping.StackableId + 14000],
                bloss: this.stats[this.filteredMapping.StackableId + 15000],
                bgwins: this.stats[this.filteredMapping.StackableId + 16000],
                bgloss: this.stats[this.filteredMapping.StackableId + 17000],
                twins: this.stats[this.filteredMapping.StackableId + 1000],
                tloss: this.stats[this.filteredMapping.StackableId + 2000],
                level: this.stats[this.filteredMapping.StackableId + 29000],
                xp: this.stats[this.filteredMapping.StackableId],
                icon: this.filteredMapping.Icon
              }
            );
          }
        }
        this.sortedData = this.unsortedData.slice();
        console.log(this.sortedData);
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

  convertTime(seconds) {
    console.log(seconds)
    const minutes = seconds / 60;
    console.log(minutes);
    const hours = minutes / 60;
    console.log(hours);
    return Math.ceil(hours);
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Champion': return compare(a.name, b.name, isAsc);
        case 'Time Played': return compare(a.time, b.time, isAsc);
        case 'Wins': return compare(a.time, b.time, isAsc);
        case 'Losses': return compare(a.time, b.time, isAsc);
        case 'Ranked 2v2 wins': return compare(+a.rwins2, +b.rwins2, isAsc);
        case 'Ranked 2v2 losses': return compare(+a.rloss2, +b.rloss2, isAsc);
        case 'Ranked 3v3 wins': return compare(+a.rwins3, +b.rwins3, isAsc);
        case 'Ranked 3v3 losses': return compare(+a.rloss3, +b.rloss3, isAsc);
        case 'Unranked 2v2 wins': return compare(+a.uwins2, +b.uwins2, isAsc);
        case 'Unranked 2v2 losses': return compare(+a.uloss2, +b.uloss2, isAsc);
        case 'Unranked 3v3 wins': return compare(+a.uwins3, +b.uwins3, isAsc);
        case 'Unranked 3v3 losses': return compare(+a.uloss3, +b.uloss3, isAsc);
        case 'Brawl wins': return compare(+a.bwins, +b.bwins, isAsc);
        case 'Brawl losses': return compare(+a.bloss, +b.bloss, isAsc);
        case 'Battleground wins': return compare(+a.bgwins, +b.bgwins, isAsc);
        case 'Battleground losses': return compare(+a.bgloss, +b.bgloss, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


