import { Routes } from '@angular/router';

// Import your page components
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Développement Web', // Optional: For browser tab title
    data: { animation: 'HomePage' } // For route animations
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'My Services - Felix Pelletier',
    data: { animation: 'ServicesPage' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Me - Felix Pelletier',
    data: { animation: 'ContactPage' }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 or redirect
];