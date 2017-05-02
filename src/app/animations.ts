
import { trigger,
  state,
  style,
  transition,
  animate,
  keyframes } from '@angular/core';


export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%', height:'100%', opacity: 0}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%', opacity: 1}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateY(20%)', opacity: 0}),
      animate('0.8s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateY(0%)'}),
      animate('0.8s ease-in-out', style({transform: 'translateY(-20%)', opacity: 0}))
    ])
  ]);
}