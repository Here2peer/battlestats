import {Component, HostListener} from '@angular/core';
import {NavigationService} from './navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})
export class AppComponent {
  title = 'app';
  navigationService;
  constructor(private navigationService: NavigationService) {
    this.navigationService = navigationService;
  }

  @HostListener('click')
  click() {
    this.navigationService.toggle();
  }
}
