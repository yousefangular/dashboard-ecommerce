import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppSalesProfitComponent } from 'src/app/components/sales-profit/sales-profit.component';
import { AppTotalFollowersComponent } from 'src/app/components/total-followers/total-followers.component';
import { AppTotalIncomeComponent } from 'src/app/components/total-income/total-income.component';
import { AppPopularProductsComponent } from 'src/app/components/popular-products/popular-products.component';
import { UsersService } from 'src/app/services/users/users.service';
import { ProductService } from 'src/app/services/productService/product.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    AppSalesProfitComponent,
    AppTotalFollowersComponent,
    AppTotalIncomeComponent,
    AppPopularProductsComponent
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
  products:any[] = [];
  users:any[] = [];
  comments:any[]= []
  carts:any[]=[]

  cartTitle:any;
  cartQuantity :any;

  sellProducts:any;
  sellProductsQuantity :any;

  TotalIcome:any;
  incomeTitle :any;

   followers:any;
   followersNumber :any;
   
   comment:any;
   commentsNumber :any;
   constructor(private userService :UsersService , private productService:ProductService , private trnsalte:TranslateService){}
   
   //  cartIcon:string = "solar:cart-3-bold-duotone";
   //  productIcon:string = "solar:shop-2-bold-duotone";
   //  userIcon:string= "solar:user-speak-bold-duotone";
   //  commentIcon:string= "solar:text-bold";
   


ngOnInit(): void {
  this.getProducts()
  this.getUsers()
  this.getComments()  
  this.getCarts()
 
  this.getTranslate()
  
}

getTranslate(){
this.trnsalte.get('home.oderdesc').subscribe((res:any)=>{
  this.cartTitle = this.trnsalte.instant('home.oderdesc')
  this.sellProducts = this.trnsalte.instant('home.selldesc')
  this.incomeTitle = this.trnsalte.instant('home.incomeTitle')
  this.followers = this.trnsalte.instant('home.usersdesc')
  this.comment = this.trnsalte.instant('home.commentssdesc')
  
});
this.trnsalte.onLangChange.subscribe((res:any)=>{
  this.cartTitle = this.trnsalte.instant('home.oderdesc')
  this.sellProducts = this.trnsalte.instant('home.selldesc')
  this.incomeTitle = this.trnsalte.instant('home.incomeTitle')
  this.followers = this.trnsalte.instant('home.usersdesc')
  this.comment = this.trnsalte.instant('home.commentssdesc')
})
// this.trnsalte.use('en')
}

getProducts(){
  this.productService.getAllproducts().subscribe((res:any)=>{
    this.products = res.products
    // console.log(this.products);
    
  })
}

getUsers(){
  this.userService.getAllUsers().subscribe((res:any)=>{
    this.users = res.users
    // console.log(this.users);
    this.followersNumber = res.users.length
    
  })
}

getComments(){
  this.userService.getAllComments().subscribe((res:any)=>{
    this.comments = res.comments
    // console.log(this.comments);
    this.commentsNumber = res.comments.length
  })
}

getCarts(){
 this.userService.getAllCarts().subscribe((res:any)=>{
  this.carts = res.carts
  // console.log(this.carts);
  this.cartQuantity = this.carts.length
  this.getSellProducts()
  this.totalProductsIncome()
  
 })
}

getSellProducts (){
  
  const totalProducts = this.carts
  .map(item => item.products.length) 
  .reduce((a, b) => a + b, 0);

   this.sellProductsQuantity = totalProducts
}

totalProductsIncome(){
  const totalIncome = this.carts.map(item => item.total) .reduce((a, b) => a + b, 0)

  this.TotalIcome = totalIncome
  // console.log(this.TotalIcome);
  
}


}
