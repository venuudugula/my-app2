import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehcleService {
  public BaseURL: string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"
  constructor(private _httpclient: HttpClient, private _router: Router) { }
  getvehicles(): Observable<any> {
    return this._httpclient.get(this.BaseURL);
  }
  createvehicle(data: any): Observable<any> {
    return this._httpclient.post(this.BaseURL + "/", data)
  }
 
  getvehicle(id:number):Observable<any>{
    return this._httpclient.get(this.BaseURL+"/"+id)
  }
  editvehicle(id:any,data:any):Observable<any>{
    return this._httpclient.put(this.BaseURL+"/"+id,data);
  }

}
