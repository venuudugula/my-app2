import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
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
