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
    this.tournamentService.getChampions().subscribe((data: any) => {
      this.data = data;
    });
  }



}
