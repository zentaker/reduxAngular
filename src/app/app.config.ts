import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ contador: contadorReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
};
