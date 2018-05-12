import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';

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
