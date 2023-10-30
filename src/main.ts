import {enableProdMode, importProvidersFrom, NgModule} from '@angular/core';

import {environment} from './environment/environment';
import {appRoutes} from './app/app.routes';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

if(environment.production){
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(NgModule),
    provideAnimations()
  ],
})
