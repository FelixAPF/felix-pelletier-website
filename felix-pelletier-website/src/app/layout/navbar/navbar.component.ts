// src/app/layout/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button'; // For pButton on language switch

interface NavItem {
  labelKey: string;
  icon?: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Can be empty or have specific styles
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  currentLang: string;

  navItems: NavItem[] = [
    { labelKey: 'NAV.HOME', routerLink: '/', icon: 'pi pi-home' },
    { labelKey: 'NAV.SERVICES', routerLink: '/services', icon: 'pi pi-briefcase' },
    { labelKey: 'NAV.CONTACT', routerLink: '/contact', icon: 'pi pi-envelope' }
  ];

  constructor(public translate: TranslateService) {
    this.currentLang = translate.currentLang || translate.defaultLang;
    translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    // this.currentLang will be updated by the onLangChange subscription
    this.closeMenu(); // Close mobile menu on language switch
  }
}