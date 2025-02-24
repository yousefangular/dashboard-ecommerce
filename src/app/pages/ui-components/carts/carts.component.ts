import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { ProductService } from 'src/app/services/productService/product.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-carts',
  standalone: true, 
  imports: [MatTableModule,
        CommonModule,
        MatCardModule,
        MaterialModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
      FormsModule,
      CommonModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{ 

  carts:any[]= [];
    displayedColumns1: string[] = ['userId', 'products','totalAmount', 'actions'];
    dataSource1 = this.carts;
  user:any[]=[]
  allData:any[]=[]
image :any;
  listUsers:any[] = []

  cartWithUsers:any=[]
      constructor(private cartService:ProductService, private userService:UsersService){}
  
    ngOnInit(): void {
    
      this.getAllCarts()
      
    }

    getAllCarts(){
      this.userService.getAllCarts().subscribe((res:any)=>{
        this.carts = res.carts
        // console.log(this.carts);
         this.listUsers = [...new Set(this.carts.map(item => item.userId))];
         this.getuserById()
      })
    }


    getuserById() {
      const requests = this.listUsers.map(userId => this.userService.getuserById(userId));
    
      forkJoin(requests).subscribe((users: any[]) => {
        this.image = users.map(user => user.image) 
        this.user = users.map(user => user.username) 
        // console.log(this.user);
        this.getusernameCarts()
      });
    }


    getusernameCarts(){
      // console.log(this.carts);
      // console.log(this.user);
// let users = Object.fromEntries(this.user.map(user => [user.id, user.username]))

      this.allData = this.carts.map((user:any,index) => ({...user,
        username: this.user[index],
        image: this.image[index]
      }));
// console.log(this.allData);
          }


          
  }
