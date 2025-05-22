import { Component } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router'; // Import ChildrenOutletContexts
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, query, group, animate } from '@angular/animations'; // Import animation functions

// Define the route animation
export const fadeSlideAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [ // Apply to any route change
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0, // Start both views as transparent
        })
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }) // New page starts slightly down and transparent
      ], { optional: true }),

      group([
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(-30px)', opacity: 0 })) // Old page slides up and fades out
        ], { optional: true }),
        query(':enter', [
          animate('400ms 100ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 })) // New page slides in and fades in
        ], { optional: true })
      ]),
    ])
  ]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeSlideAnimation] // Add the animation to the component
})
export class AppComponent {
  title = 'felix-pelletier-website';

  constructor(
    private translate: TranslateService,
    private contexts: ChildrenOutletContexts // Inject ChildrenOutletContexts
  ) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  // Method to get the animation data from the route
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}