import { Component, OnInit } from '@angular/core';
import { TournamentService} from './tournament.service';
import {SteamComponent} from '../steam/steam.component';
import {SteamService} from '../steam/steam.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
  providers: [SteamService]
})

export class TournamentComponent implements OnInit {
  public activeTab = 'myTourneys';

  tournamentData: any;
  ownTourneyData: any;
  allTourneyData: any;
  steam: any;

  constructor(private tournamentService: TournamentService, private steamservice: SteamService) { }

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

    this.steam = this.steamservice.getSteamUser();
  }

  updateTournamentData(tournamentID) {
    this.tournamentService.getTournamentData(tournamentID).subscribe((data: any) => {
      console.log(data);
      this.tournamentData = data;
    });
  }

}
