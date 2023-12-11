import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpclient:HttpClient) { }
  getimages():Observable<any>{
    return this._httpclient.get("https://api.imgflip.com/get_memes")
  }
}
