import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
}) 
export class ProductDetailsComponent implements OnInit{
id!:any;
product!:any



constructor(private activatedRout:ActivatedRoute,private productService:ProductService){
  this.id = this.activatedRout.snapshot.paramMap.get('id');
  this.getProduct()
}

ngOnInit(): void {
}

getProduct(){
  this.productService.getSingleProduct(this.id).subscribe((res:any)=>{
    this.product = res
    console.log(this.product);
    
  })
}


}
