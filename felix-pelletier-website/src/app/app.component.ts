import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core'; // Import TranslateService

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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'felix-pelletier-website';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr'); // Set default language
    // Optionally, set the current language based on browser or saved preference
    const browserLang = translate.getBrowserLang();
    translate.use('fr');
    // Or simply translate.use('en'); to start with English
  }
}