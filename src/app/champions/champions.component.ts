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
  catagory: any;
  melee: any;
  ranged: any;
  support: any;

  constructor(private championsService: ChampionsService) { }

  ngOnInit() {
    this.championsService.getChampions().subscribe((data: any) => {
        this.catagory = data['champions'];
        this.melee = this.catagory['melee'];
        this.ranged = this.catagory['ranged'];
        this.support = this.catagory['support'];
      }
    );
  }
}
