import { Routes } from '@angular/router';

// ui
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './list-products/list-products.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { CartsComponent } from './carts/carts.component';
import { ProductDetailsComponent } from './list-products/product-details/product-details.component';


export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-products',
        component: AppFormsComponent,
      },
      { 
        path: 'list-products',
        component: AppTablesComponent,
      }, 
      {
        path: 'list-users',
        component: UsersComponent,
      },
      {
        path: 'list-comments',
        component: CommentsComponent,
      },
      {
        path: 'list-carts',
        component: CartsComponent,
      },
      {
        path:'product-Detail/:id',
        component:ProductDetailsComponent
      }
    ],
  },
];
