import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {usersFeatureKey, usersReducer} from './users/store/reducers'
import {UsersEffects} from './users/store/effects'
import {ProductsEffects} from './products/store/effects'
import {provideHttpClient} from "@angular/common/http";
import {productsFeatureKey, productsReducer} from "./products/store/reducers";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {authFeatureKey, authReducer} from "./login/store/reducers";
import {AuthEffects} from "./login/store/effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name: usersFeatureKey, reducer: usersReducer}),
    provideState({name: productsFeatureKey, reducer: productsReducer}),
    provideState({name: authFeatureKey, reducer: authReducer}),
    provideEffects(
      UsersEffects,
      ProductsEffects,
      AuthEffects
    ), provideAnimationsAsync()
  ]
};
