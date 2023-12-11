import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public  baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this._httpClient.get(this.baseurl)
  }
  getfilterdUser(term: string): Observable<any> {
    return this._httpClient.get(this.baseurl+"?filter=" + term)
  }

  getsorteddUser(colom: string, order: string): Observable < any > {
    return this._httpClient.get( this.baseurl+"?sortBy=" + colom + "&order=" + order)
  }
  getpageUsers(pageno:number): Observable < any > {
    return this._httpClient.get(this.baseurl+"?limit=10&page="+pageno )
  }
  deleteUser(id:string): Observable < any > {
    return this._httpClient.delete(this.baseurl+"/"+id )
  }
  createuser(data:any):Observable<any>{
    return this._httpClient.post(this.baseurl+"/",data)
  }

}



