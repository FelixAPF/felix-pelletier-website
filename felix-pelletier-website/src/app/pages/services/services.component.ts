// src/app/pages/services/services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, TranslateModule], // Add TranslateModule
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'pi pi-fw pi-desktop',
      titleKey: 'SERVICES_PAGE.SERVICE_1_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_1_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.ANGULAR',
        'SERVICES_PAGE.TECHNOLOGIES.REACT',
        'SERVICES_PAGE.TECHNOLOGIES.NODEJS',
        'SERVICES_PAGE.TECHNOLOGIES.PYTHON_DJANGO_FLASK',
        'SERVICES_PAGE.TECHNOLOGIES.DATABASES_SQL_NOSQL'
      ]
    },
    {
      icon: 'pi pi-fw pi-palette',
      titleKey: 'SERVICES_PAGE.SERVICE_2_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_2_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.ANGULAR',
        'SERVICES_PAGE.TECHNOLOGIES.PRIMENG',
        'SERVICES_PAGE.TECHNOLOGIES.TAILWINDCSS',
        'SERVICES_PAGE.TECHNOLOGIES.HTML5',
        'SERVICES_PAGE.TECHNOLOGIES.CSS3',
        'SERVICES_PAGE.TECHNOLOGIES.JAVASCRIPT_TYPESCRIPT'
      ]
    },
    {
      icon: 'pi pi-fw pi-cloud-upload',
      titleKey: 'SERVICES_PAGE.SERVICE_3_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_3_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.NODEJS_EXPRESS',
        'SERVICES_PAGE.TECHNOLOGIES.PYTHON_FLASK_FASTAPI',
        'SERVICES_PAGE.TECHNOLOGIES.RESTFUL_APIS',
        'SERVICES_PAGE.TECHNOLOGIES.GRAPHQL',
        'SERVICES_PAGE.TECHNOLOGIES.OAUTH'
      ]
    },
    {
      icon: 'pi pi-fw pi-mobile',
      titleKey: 'SERVICES_PAGE.SERVICE_4_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_4_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.TAILWINDCSS',
        'SERVICES_PAGE.TECHNOLOGIES.CSS_GRID',
        'SERVICES_PAGE.TECHNOLOGIES.FLEXBOX',
        'SERVICES_PAGE.TECHNOLOGIES.MEDIA_QUERIES'
      ]
    },
    {
      icon: 'pi pi-fw pi-cog',
      titleKey: 'SERVICES_PAGE.SERVICE_5_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_5_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.GIT',
        'SERVICES_PAGE.TECHNOLOGIES.CI_CD',
        'SERVICES_PAGE.TECHNOLOGIES.PERF_MONITORING'
      ]
    },
    {
      icon: 'pi pi-fw pi-search',
      titleKey: 'SERVICES_PAGE.SERVICE_6_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_6_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.BEST_PRACTICES',
        'SERVICES_PAGE.TECHNOLOGIES.CODE_REVIEW',
        'SERVICES_PAGE.TECHNOLOGIES.PERF_OPTIMIZATION',
        'SERVICES_PAGE.TECHNOLOGIES.SECURITY_ANALYSIS'
      ]
    }
  ];
}