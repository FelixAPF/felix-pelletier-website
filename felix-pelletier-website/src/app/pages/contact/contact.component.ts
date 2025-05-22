import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'; // For styling contact cards

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = 'felix.pelletierf@hotmail.com';
  phone = '(438) 397-3301'; // Replace with your actual phone
}