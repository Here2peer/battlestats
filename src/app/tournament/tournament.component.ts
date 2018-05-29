import { Component, OnInit } from '@angular/core';
import { TournamentService} from './tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {
  public activeTab = 'myTourneys';

  data: any;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentService.getTournamentData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
    //TODO: Implement tournament builder function?
  }



}
