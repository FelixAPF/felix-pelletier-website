// layout/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core'; // Add OnInit
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
import { ButtonModule } from 'primeng/button'; // For the language switcher button

interface NavItem {
  labelKey: string; // Changed from label to labelKey
  icon?: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ButtonModule], // Add TranslateModule and ButtonModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { // Implement OnInit
  isMenuOpen = false;
  isScrolled = false;
  currentLang: string;

  navItems: NavItem[] = [
    { labelKey: 'NAV.HOME', routerLink: '/', icon: 'pi pi-home' },
    { labelKey: 'NAV.SERVICES', routerLink: '/services', icon: 'pi pi-briefcase' },
    { labelKey: 'NAV.CONTACT', routerLink: '/contact', icon: 'pi pi-envelope' }
  ];

  constructor(public translate: TranslateService) { // Make translate public or create a getter
    this.currentLang = translate.currentLang || translate.defaultLang;
    translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  ngOnInit(): void {} // Keep ngOnInit if you need it for other initializations

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.closeMenu(); // Close mobile menu on language switch
  }
}