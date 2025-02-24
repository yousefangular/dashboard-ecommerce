import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getAllproducts(filteredProducts?:any,limit?:number, skip?:number){
    if(filteredProducts){
      return this.http.get('https://dummyjson.com/products/search?q='+filteredProducts)
    }else if(!filteredProducts && !limit && !skip ){

       return this.http.get('https://dummyjson.com/products')
    }else{

    return this.http.get('https://dummyjson.com/products?limit='+limit+'&skip='+skip)
  }
  
  }

  deleteProducts(id:any){
    return this.http.delete('https://dummyjson.com/products/'+id)
  }

  

  getSingleProduct(id:any){
    return this.http.get('https://dummyjson.com/products/'+id)
  }

}
