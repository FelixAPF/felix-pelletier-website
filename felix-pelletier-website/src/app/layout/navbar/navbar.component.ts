import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterModule], // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // You can create this file if you need specific navbar styles
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'My Services',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/services']
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
      }
    ];
  }
}