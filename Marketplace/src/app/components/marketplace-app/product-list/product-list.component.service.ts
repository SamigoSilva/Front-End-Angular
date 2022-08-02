import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable()

export class StoredService
{
  private url ="https://apibookstore20220408185052.azurewebsites.net/api/bookstore";

  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http:HttpClient){}

  getStored(){
    return this.http.get(this.url)
  }

}



