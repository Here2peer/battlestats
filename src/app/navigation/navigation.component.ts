import {Component, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from './navigation.service';
import {MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NavigationService]
})
export class NavigationComponent implements OnInit {
  @HostBinding('class.is-mobile')
  mobile = false;

  constructor(private navigationService: NavigationService, private router: Router) {
  }

  ngOnInit() {
    this.navigationService.change.subscribe(mobile => {
      this.mobile = mobile;
    });
  }

  searchPlayer(playername) {

    this.router.navigate(['/player-list'], { queryParams: { playername: playername}});
  }



}
