import { Component, OnInit } from '@angular/core';
import {TeamStatsService} from './team-stats.service';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css'],
  providers: [TeamStatsService]
})
export class TeamStatsComponent implements OnInit {

  teamstats: any;
  constructor(private teamStatsService: TeamStatsService) { }

  ngOnInit() {
    this.teamStatsService.getTeamStats().subscribe((data: any) => {
      this.teamstats = data;
    };
  }
}
