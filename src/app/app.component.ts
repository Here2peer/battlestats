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



  constructor(private navigationService: NavigationService) {
  }



  @HostListener('click')
  click() {
    this.navigationService.toggle();
  }
}
