import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TranslateModule } from '@ngx-translate/core';


// export interface productsData {
//     id: number;
//     imagePath: string;
//     uname: string;
//     price: string;
//     paid: string;
//     status: string;
//     progress: string;
// }

// const ELEMENT_DATA: productsData[] = [
//     {
//         id: 1,
//         imagePath: 'assets/images/products/s1.jpg',
//         uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
//         price: '$180',
//         paid: 'Partially paid',
//         status: 'Confirmed',
//         progress: 'accent',
//     },
//     {
//         id: 2,
//         imagePath: 'assets/images/products/s2.jpg',
//         uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
//         price: '$120',
//         paid: 'Full paid',
//         status: 'Confirmed',
//         progress: 'success',
//     },
//     {
//         id: 3,
//         imagePath: 'assets/images/products/s3.jpg',
//         uname: 'PlayStation 5 DualSense Wireless Controller',
//         price: '$120',
//         paid: 'Cancelled',
//         status: 'Confirmed',
//         progress: 'error',
//     },
//     {
//         id: 4,
//         imagePath: 'assets/images/products/s4.jpg',
//         uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office De...',
//         price: '$120',
//         paid: 'Partially paid',
//         status: 'Confirmed',
//         progress: 'accent',
//     },
// ];
@Component({
    selector: 'app-popular-products',
    standalone: true,
    imports: [
        MaterialModule,
        MatMenuModule,
        MatButtonModule,
        CommonModule,
        TablerIconsModule,
        MatProgressBarModule,
        NgScrollbarModule,TranslateModule
    ],
    templateUrl: './popular-products.component.html',
})
export class AppPopularProductsComponent {

    displayedColumns: string[] = ['products', 'payment', 'status'];
   

    @Input() data:any[] =[] 
    dataSource = this.data;
    constructor() { }
}
