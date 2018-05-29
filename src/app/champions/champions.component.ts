import { Component, OnInit } from '@angular/core';
import {ChampionsService} from './champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  providers: [ChampionsService]
})
export class ChampionsComponent implements OnInit {

  data: any;
  newgameplay: any;

  constructor(private championsService: ChampionsService) { }

  activateClass(champion) {
    champion.active = !champion.active;
  }

  changeStateActivate(element) {
    element.active = !element.active;
  }


  ngOnInit() {
    this.championsService.getNewGameplay().subscribe((data: any) => {
        this.newgameplay = data.characters;
      }
    );
  }
}
