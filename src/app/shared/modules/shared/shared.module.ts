import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
