import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface NavItem {
  label: string;
  icon?: string; // Optional icon class (e.g., for Font Awesome if you add it, or custom SVG icons)
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  navItems: NavItem[] = [
    { label: 'Home', routerLink: '/', icon: 'pi pi-home' }, // Using PrimeIcons for now, can be replaced
    { label: 'My Services', routerLink: '/services', icon: 'pi pi-briefcase' },
    { label: 'Contact', routerLink: '/contact', icon: 'pi pi-envelope' }
  ];

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
}