import { Component } from '@angular/core';
import { routerTransition } from './animations';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'[@routerTransition]': ''},
  animations: [routerTransition,
  
        trigger('animateIn', [

      state('in', style({transform: 'translateY(0)'})),

      transition('void => *', [
        style({transform: 'translateY(-100%)',opacity: '0'}),
        animate('300ms 2s ease-out')
      ])
  ]),  
  ],
})
export class AppComponent {
  title = 'app works!';
  state = 'in';
}
