import { CmsLayoutComponent } from "./layouts/cms-layout/cms-layout.component";
import { Routes } from "@angular/router";
import { HomeCmsComponent } from "./pages/home-cms/home-cms.component";


export const cmsRoutes: Routes = [{
  path: '', component: CmsLayoutComponent,
  children: [
    {path: 'cms', pathMatch: "full", component: HomeCmsComponent},
  ]
}]
