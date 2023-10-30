import { Routes } from '@angular/router';
import { ErrorComponent } from '../features/cms/pages/error/error.component';

export const appRoutes: Routes = [
    {path: '', loadChildren: () => import('../features/cms/cms.routes').then (routes => routes.cmsRoutes)},
    {path: '**', component: ErrorComponent}
];
