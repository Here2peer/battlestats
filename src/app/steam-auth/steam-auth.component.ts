import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steam-auth',
  templateUrl: './steam-auth.component.html',
  styleUrls: ['./steam-auth.component.css']
})
export class SteamAuthComponent implements OnInit {

  api = '47E81668C8A02D8BC4341E13C666BE0B';
  constructor() { }

  ngOnInit() {
  }

}
