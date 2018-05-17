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

  data: any;
  catagory: any;
  melee: any;
  ranged: any;
  support: any;
  champions: any;
  lore: boolean;

  gameplay: any;
  english: any;
  newgameplay: any;

  constructor(private championsService: ChampionsService) { }

  activateClass(champion) {
    champion.active = !champion.active;
  }

  changeStateActivate(element) {
    element.active = !element.active;
  }


  ngOnInit() {
    this.championsService.getChampions().subscribe((data: any) => {
        this.catagory = data;
        this.champions = this.catagory['champions'];
        console.log(this.catagory);
        this.melee = this.champions['melee'];
        this.ranged = this.champions['ranged'];
        this.support = this.champions['support'];
        console.log(this.melee);
      }
    );
    this.championsService.getGameplay().subscribe((data: any) => {
      console.log(data);
        this.gameplay = data.characters;
      }
    );
    this.championsService.getNewGameplay().subscribe((data: any) => {
        console.log(data);
        this.newgameplay = data.characters;
      }
    );
    this.championsService.getEnglishTexts().subscribe((data: any) => {
        this.english = data;
      }
    );
  }
}
