import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card'; // For styling service items
import { TagModule } from 'primeng/tag';   // For adding tech tags

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'pi pi-fw pi-desktop',
      title: 'Custom Web Application Development',
      description: 'Full-cycle development of tailor-made web applications, from UI/UX design to robust backend implementation and deployment. Specializing in creating interactive and dynamic user experiences.',
      technologies: ['Angular', 'React', 'Node.js', 'Python (Django/Flask)', 'Databases (SQL/NoSQL)']
    },
    {
      icon: 'pi pi-fw pi-palette',
      title: 'Frontend Development & UI/UX',
      description: 'Crafting responsive, accessible, and visually stunning user interfaces using modern frontend frameworks and libraries. Focus on usability, performance, and cross-browser compatibility.',
      technologies: ['Angular', 'PrimeNG', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript/TypeScript']
    },
    {
      icon: 'pi pi-fw pi-cloud-upload',
      title: 'API Development & Integration',
      description: 'Designing and building secure, scalable RESTful APIs. Integrating third-party services and APIs to extend application functionality and streamline workflows.',
      technologies: ['Node.js (Express)', 'Python (Flask/FastAPI)', 'RESTful APIs', 'GraphQL', 'OAuth']
    },
    {
      icon: 'pi pi-fw pi-mobile',
      title: 'Responsive & Mobile-First Design',
      description: 'Ensuring your web applications look and perform flawlessly on all devices, from desktops to smartphones. Adhering to mobile-first principles for optimal user experience.',
      technologies: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'Media Queries']
    },
    {
      icon: 'pi pi-fw pi-cog',
      title: 'Website Maintenance & Support',
      description: 'Providing ongoing support, updates, and maintenance services to ensure your web applications remain secure, up-to-date, and performant.',
      technologies: ['Version Control (Git)', 'CI/CD', 'Performance Monitoring']
    },
    {
      icon: 'pi pi-fw pi-search',
      title: 'Consulting & Code Audits',
      description: 'Offering expert advice on web architecture, technology stack selection, and best practices. Performing thorough code audits to identify areas for improvement in performance, security, and maintainability.',
      technologies: ['Best Practices', 'Code Review', 'Performance Optimization', 'Security Analysis']
    }
  ];
}