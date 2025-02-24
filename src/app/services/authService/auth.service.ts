import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from 'src/app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl :string = "https://e-commerce-serverside.vercel.app/api/users/"

  constructor(private http:HttpClient) { }

  register(model:Register) :Observable<Register>{
    return this.http.post<Register>(`${this.baseUrl}`, model)
  }

  login(model:Login):Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}auth` , model)
  }
}
