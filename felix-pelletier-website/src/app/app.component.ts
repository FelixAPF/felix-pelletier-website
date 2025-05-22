import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component'; // Import Navbar
import { FooterComponent } from './layout/footer/footer.component'; // Import Footer
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true, // Assuming standalone setup
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent, // Add NavbarComponent
    FooterComponent  // Add FooterComponent
  ],
  templateUrl: './app.component.html',
  providers: [TranslateService],
  styleUrls: ['./app.component.css'] // Your app.component.css file
})
export class AppComponent {
  title = 'felix-pelletier-website';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('fr');
    translate.addLangs(['fr', 'en']);
    translate.use('fr');
  }
}