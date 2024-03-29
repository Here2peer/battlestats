import { Component, OnInit } from '@angular/core';
import {SteamService} from './steam.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css'],
  providers: [SteamService]
})
export class SteamComponent implements OnInit {

  steamuser: any;

  constructor(private steamService: SteamService) {
  }

  ngOnInit() {
    /*this.steamService.getSteamUser().subscribe((data: any) =>  {
      this.steamuser = data;
      console.log(this.steamuser);
    }
    );*/
    this.steamuser = this.steamService.getSteamUser();
  }

  public getSteamUser() {
    return this.steamuser;
  }
}
