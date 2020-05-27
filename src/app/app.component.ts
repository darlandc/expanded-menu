import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('openFilters', [
      state('initial', style({
        width: '100%',
        height: '100px'
      })),
      state('final', style({
        width: '100%',
        height: '300px'
      })),
      transition('initial=>final', animate('500ms')),
      transition('final=>initial', animate('500ms'))
    ]),
    trigger('changeIcon', [
      state('initial', style({
      })),
      state('final', style({
      })),
      transition('initial=>final', animate('0ms')),
      transition('final=>initial', animate('0ms'))
    ]),
  ]
})
export class AppComponent {
  title = 'expanded-menu';
  openMsg = 'abrir';
  closeMsg = 'fechar';
  open = true;

  currentState = 'initial';

change() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  this.open = !this.open;
}

}
