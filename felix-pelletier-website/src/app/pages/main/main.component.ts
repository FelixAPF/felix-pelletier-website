import { Component } from '@angular/core';
import { QuickFormComponent } from '../../components/quick-form/quick-form.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // For any buttons on this page
import { RouterLink } from '@angular/router';   // For routerLink

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, QuickFormComponent, ButtonModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent { 

    // Add to MainComponent class in main.component.ts
  scrollToForm() {
    document.getElementById('quick-form-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}