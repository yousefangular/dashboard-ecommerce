import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, Register } from 'src/app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl :string = "https://e-commerce-serverside.vercel.app/api/users/"

 username :BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(private http:HttpClient) { }

  register(model:Register) :Observable<Register>{
    return this.http.post<Register>(`${this.baseUrl}`, model)
  }

  login(model:Login):Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}auth` , model)
  }

  logout():Observable<any>{
    return this.http.post<any>(`${this.baseUrl}logout`,{})
  }
}
