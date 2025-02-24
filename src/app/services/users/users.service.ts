import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

interface User {
  id: number;
  username: string;
}

interface Cart {
  userId: number;
  items: any[];
}

@Injectable({
  providedIn: 'root'
})



export class UsersService {

  constructor(private http :HttpClient) { }

  getAllComments(){
    return this.http.get('https://dummyjson.com/comments')
  }

  getAllUsers(){
    return this.http.get('https://dummyjson.com/users')
  }

  getSingleUser(id:any){
    return this.http.get('https://dummyjson.com/users/'+id+'/carts')
  }

  // cart ------ 

  getAllCarts(){
    return this.http.get('https://dummyjson.com/carts')
  }


getuserById(id:any){
  return this.http.get('https://dummyjson.com/users/'+id)
}



// -------------------------------------------------------   


  deletComment(id:any){
    return this.http.delete('https://dummyjson.com/comments/'+id)
  }
}
