import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {PlayerStatsComponent} from '../player-stats/player-stats.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [PlayerStatsComponent]
})
export class ChartsComponent implements OnInit {
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels = ['ranked2v2', 'unranked 2v2', 'ranked 3v3', 'unranked 3v3', 'brawl', 'battlerite'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData;

  constructor(private playerStatsComponent: PlayerStatsComponent) { }

  ngOnInit() {
    this.barChartData = this.playerStatsComponent.getChartData();
  }

}
