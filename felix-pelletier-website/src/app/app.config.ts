import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import  Lara from '@primeng/themes/lara';


import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations'; // Ensure this is here


const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');
const routerOptions: ExtraOptions = {
  // enableTracing: true, // Optional: for debugging routes
  scrollPositionRestoration: 'enabled', // Restores scroll position on back/forward navigation
  anchorScrolling: 'enabled',         // Enables scrolling to anchor fragments
  scrollOffset: [0, 64], // Optional: offset scrolling by [x, y] pixels (e.g., for fixed navbars, y is usually navbar height)
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),     
      provideRouter(routes, withInMemoryScrolling(routerOptions)), // <--- APPLY SCROLLING OPTIONS HERE
        provideHttpClient(withInterceptorsFromDi()),
            provideAnimations(),
        providePrimeNG({
      theme: {
          preset: Lara,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
  }),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'fr' // Set a default language

    })
  ])
    ]
};

