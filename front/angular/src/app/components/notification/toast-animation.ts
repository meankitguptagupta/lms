import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';

// https://www.intertech.com/Blog/angular-tutorial-simple-toast-animation/

export const ToastAnimation:AnimationTriggerMetadata = trigger(
    'toast', [
        state('show', style({
            bottom: '40px'
        })),
        state('hide', style({
            top: '-100%'
        })),
        transition('hide => show', animate('1s ease')),
        transition('show => hide', animate('1s ease'))
    ]
);