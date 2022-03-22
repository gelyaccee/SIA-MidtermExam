import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = "https://jsonplaceholder.typicode.com"
  constructor(private http: HttpClient) { }

  fetchUser() {
    return this.http.get(this.API+'/users')
  }

  sortdatabyID(data:any){
     return data.reverse()
  }
  
}
