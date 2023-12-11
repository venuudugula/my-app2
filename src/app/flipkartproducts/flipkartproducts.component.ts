import { Component } from '@angular/core';
import { FlipkartproductService } from '../flipkartproduct.service';

@Component({
  selector: 'app-flipkartproducts',
  templateUrl: './flipkartproducts.component.html',
  styleUrls: ['./flipkartproducts.component.css']
})
export class FlipkartproductsComponent {

  public flipkart: any = [];

  constructor(private _flipkartproducts: FlipkartproductService) {

    _flipkartproducts.getflip().subscribe(
      (data: any) => {
        this.flipkart = data
      },
      (error: any) => {
        alert("servererror")
      }

    )
  }
}
