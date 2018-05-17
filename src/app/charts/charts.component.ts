import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { PlayerService} from '../player-stats/player.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [PlayerService]
})
export class ChartsComponent implements OnInit {
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
    yAxes: [ { id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0, max: 100 , } }, ]}
  };

  barChartLabels = ['ranked2v2', 'unranked 2v2', 'ranked 3v3', 'unranked 3v3', 'brawl', 'battleground'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData;
  private stats: any;
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(0,225,9)',
      borderColor: 'rgba(225,10,24)',
      pointBackgroundColor: 'rgba(225,10,24)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24)',
      borderColor: 'rgba(225,10,24)',
      pointBackgroundColor: 'rgba(225,10,24)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe((data: any) => {
      console.log(data);
      const playerData = data['data'];
      const attribute = playerData['attributes'];
      this.stats = attribute['stats'];
      this.barChartData = [
        {data: [(this.stats[10] / (this.stats[10] + this.stats[11])) * 100,
            (this.stats[14] / (this.stats[14] + this.stats[15])) * 100,
            (this.stats[12] / (this.stats[12] + this.stats[13])) * 100,
            (this.stats[16] / (this.stats[16] + this.stats[17])) * 100,
            (this.stats[18] / (this.stats[18] + this.stats[19])) * 100,
            (this.stats[22] / (this.stats[22] + this.stats[23])) * 100],
          label: 'wins'},
      ];
    });
  }

}
