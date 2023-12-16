import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  public count:number=0;
  constructor(private _commonservice:CommonService){
    _commonservice.getvalue().subscribe(
    (data:any)=>
    {
      this.count=data;
    }
    )
  }


}
