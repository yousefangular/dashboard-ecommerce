import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { loginGuard } from './gaurds/login-gaurd.guard';


export const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
        canActivate:[loginGuard]
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      } 
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
          import('./pages/authentication/side-login/side-login.component').then(
            (c) => c.AppSideLoginComponent
          ),
 },
 {
  path: 'register',
  loadComponent: () =>
        import('./pages/authentication/side-register/side-register.component').then(
          (c) => c.SideRegisterComponent
        ),
},
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
