import { Component, PLATFORM_ID, Inject } from '@angular/core'; // Added PLATFORM_ID and Inject
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Added isPlatformBrowser
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router'; 
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, query, group, animate } from '@angular/animations'; 

export const fadeSlideAnimation = trigger('routeAnimations', [
  // ... your existing animation code remains exactly the same ...
  transition('* <=> *', [ 
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0, 
      })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateY(30px)', opacity: 0 }) 
    ], { optional: true }),

    group([
      query(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(-30px)', opacity: 0 })) 
      ], { optional: true }),
      query(':enter', [
        animate('400ms 100ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 })) 
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
  animations: [fadeSlideAnimation] 
})
export class AppComponent {
  title = 'felix-pelletier-website';
  isBrowser: boolean; // Add this variable

  constructor(
    private translate: TranslateService,
    private contexts: ChildrenOutletContexts,
    @Inject(PLATFORM_ID) platformId: Object // Inject the platform ID
  ) {
    translate.setDefaultLang('fr');
    translate.use('fr');
    // Check if we are in the browser
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}