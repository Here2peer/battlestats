import { Component, OnInit } from '@angular/core';
import {SteamService} from './steam.service';


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
      if (this.steamuser == null) {
        console.log(this.steamuser);
      } else {
        console.log('DATA FOUND!!!' + this.steamuser);
      }
    }
    );*/
    try{
      this.steamuser = window.location.search.substr(1);
    } catch(e) {
      this.steamuser = 0;
    }
    console.log(this.steamuser);
  }
}
