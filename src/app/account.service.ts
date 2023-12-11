import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

public BaseURL:string="https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private _httpClient:HttpClient)
  {}
    getaccount():Observable<any>{
      return this._httpClient.get(this.BaseURL)
    }
    deleteaccount(id:string):Observable<any>{
      return this._httpClient.delete(this.BaseURL+"/"+id)
    }
    sortaccountusers(colom:string,order:string):Observable<any>{
      return this._httpClient.get(this.BaseURL+"?sortBy="+colom+"&order="+order);
    }
    getfilteraccount(term:string):Observable<any>{
      return this._httpClient.get(this.BaseURL+"?filter="+term)
    }
    page(pageno:number){
        return this._httpClient.get(this.BaseURL+"?limit=10&page="+pageno)
    }

    createAccount(data:any)
    {
      return this._httpClient.post(this.BaseURL,data)
    }
}
