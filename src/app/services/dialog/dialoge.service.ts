import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DialogeService {

  constructor(private http:HttpClient) { }

  addProduct(model:any){
    return this.http.post('https://dummyjson.com/products/add',model)
  }

  updateProduct(id:any, model:any){
    return this.http.put('https://dummyjson.com/products/'+id,model)
  }
}
