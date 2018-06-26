import { Component, OnInit } from '@angular/core';
import {ChampionsService} from './champions.service';
import {isBoolean} from 'util';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  providers: [ChampionsService]
})
export class ChampionsComponent implements OnInit {

  newgameplay: any;

  constructor(private championsService: ChampionsService) { }


  changeStateActivate(element) {
    element.active = !element.active;
  }


  ngOnInit() {
    this.championsService.getNewGameplay().subscribe((data: any) => {
        // console.log(data);
        this.newgameplay = data.characters;
      }
    );
  }
}
