import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

public countsub:BehaviorSubject<any>=new BehaviorSubject(0);

public count:number = 0;

getvalue()
{
return this.countsub.asObservable();
}
setvallue()
{
  this.count++;
  this.countsub.next(this.count);
}
  constructor() { }

}
