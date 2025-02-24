import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit ,inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from 'src/app/services/productService/product.service';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DailogComponent } from './dailog/dailog.component';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// } 
 

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 180,
    priority: 'confirmed',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    budget: 90,
    priority: 'cancelled',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    uname: 'PlayStation 5 DualSense Wireless Controller',
    budget: 120,
    priority: 'rejected',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
    budget: 160,
    priority: 'confirmed',
  },
];

@Component({
  selector: 'app-tables', 
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    NgxPaginationModule,
    TranslateModule 
  ],
  
  templateUrl: './listproducts.component.html',
  styleUrl:'./list-products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppTablesComponent implements OnInit{

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DailogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

products:any[]= [];

page: number = 1;
itemsPerPage: number = 3
totalItemCount: number = 0

filteredProducts:any =''
  
displayedColumns1: string[] = ['products', 'payment', 'status', 'actions'];
dataSource1 = this.products;
constructor(private productService:ProductService){}

ngOnInit(): void {
  this.getAllProducts(this.page)
}

getAllProducts(page:number){
  const skip = (page-1) * this.itemsPerPage;
  
  // console.log(this.filteredProducts);
  
  this.productService.getAllproducts(this.filteredProducts,this.itemsPerPage, skip).subscribe((res:any)=>{
    this.products = res.products
    this.totalItemCount = res.total
    
    // console.log(this.totalItemCount);
    
    // console.log(this.products);
  })
}
 

deleteProduct(id:any){
let productId = id;
this.productService.deleteProducts(productId).subscribe((res:any)=>{
  
  alert("deleted product successfuly")
})
}

update(element:any){
  // console.log(event);

const dialogRef = this.dialog.open(DailogComponent,{
  data:element
});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}

search(event:any){
  this.filteredProducts = event.value;
  // this.page = 1 
  this.getAllProducts(this.page)
}


changePge(event:any){
  this.page = event
  this.getAllProducts(event)
}


}
