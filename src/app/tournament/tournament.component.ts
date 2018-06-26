import { Component, OnInit } from '@angular/core';
import { TournamentService} from './tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {
  public activeTab = 'myTourneys';

  tournamentData: any;
  ownTourneyData: any;
  allTourneyData: any;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentService.getTournamentList('00000001').subscribe((tdata: any) => {
      console.log(tdata);
      this.ownTourneyData = tdata;
      });
    this.updateTournamentData('00000001');
    this.tournamentService.getAllTourneys().subscribe((adata: any) => {
      console.log(adata);
      this.allTourneyData = adata;
    });
  }

  updateTournamentData(tournamentID) {
    this.tournamentService.getTournamentData(tournamentID).subscribe((data: any) => {
      console.log(data);
      this.tournamentData = data;
    });
  }

}
