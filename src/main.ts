import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

createApplication({ providers: appConfig.providers ?? [] })
  .then(app => {
    // Cria o custom element a partir do componente Angular
    const element = createCustomElement(AppComponent, { injector: app.injector });

    // Evita registrar duas vezes (HMR / recarregamentos)
    if (!customElements.get('dashboard-remote')) {
      customElements.define('dashboard-remote', element);
      console.log('[dashboard-remote] <dashboard-remote> registrado');
    }
  })
  .catch(err => console.error('[dashboard-remote] erro ao inicializar', err));