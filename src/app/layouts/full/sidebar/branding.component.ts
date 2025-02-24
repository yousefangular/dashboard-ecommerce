import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule,],
  template: `
    <div class="branding">
      <a  class="text-decoration-none "[routerLink]="['/']">
        <!-- <img
          src="./assets/images/logos/logo.svg"
          class="align-middle m-2"
          alt="logo"
        /> -->
        <h1 class="f-s-20 text-muted text-center ">Dashboard admin<br/> E-Commerce</h1>
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
