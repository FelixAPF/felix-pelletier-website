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
    /* Application Web simple (visuelle) avec possibilité de formulaire */
    {
      icon: 'pi pi-fw pi-server',
      titleKey: 'SERVICES_PAGE.SERVICE_2_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_2_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.ANGULAR',
        'SERVICES_PAGE.TECHNOLOGIES.HTML5',
        'SERVICES_PAGE.TECHNOLOGIES.CSS3',
        'SERVICES_PAGE.TECHNOLOGIES.JAVASCRIPT_TYPESCRIPT'
      ]
    },
    /* Application Web avec Serveur et base de données */
    {
      icon: 'pi pi-fw pi-cog',
      titleKey: 'SERVICES_PAGE.SERVICE_1_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_1_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.ANGULAR',
        'SERVICES_PAGE.TECHNOLOGIES.HTML5',
        'SERVICES_PAGE.TECHNOLOGIES.CSS3',
        'SERVICES_PAGE.TECHNOLOGIES.JAVASCRIPT_TYPESCRIPT',
        'SERVICES_PAGE.TECHNOLOGIES.JAVA',
        'SERVICES_PAGE.TECHNOLOGIES.DATABASES_SQL_NOSQL'
      ]
    },
    {
      icon: 'pi pi-fw pi-cog',
      titleKey: 'SERVICES_PAGE.SERVICE_3_TITLE',
      descriptionKey: 'SERVICES_PAGE.SERVICE_3_DESC',
      technologyKeys: [
        'SERVICES_PAGE.TECHNOLOGIES.JAVA',
        'SERVICES_PAGE.TECHNOLOGIES.DATABASES_SQL_NOSQL'

      ]
    },
  ];
}