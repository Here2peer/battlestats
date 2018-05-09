import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class NavigationService {

  isMobile = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isMobile = !this.isMobile;
    const body = document.body;
    if (this.isMobile) {
      body.classList.add('with--sidebar');
    } else {
      body.classList.remove('with--sidebar');
    }
    this.change.emit(this.isMobile);
  }

}
