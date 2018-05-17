import {Component, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from './navigation.service';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NavigationService]
})
export class NavigationComponent implements OnInit {
  @HostBinding('class.is-mobile')
  mobile = false;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.change.subscribe(mobile => {
      this.mobile = mobile;
    });
  }



}
