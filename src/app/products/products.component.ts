import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public addtocart: any[] = [];
  public name: string = '';
  public price: number = 0;
  public rating: number = 0;
  public freeDelivery: string = 'false';
  public totalvalue: number = 0;
  public cartitems: number = 0;
  public search: string = ''
  searchValue: string = '';
  
  public ser:string = '';
  filteredItems: any[] = [];
  //searchValue: string = '';
  Addtocart() {
    const item1 = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      freeDelivery: this.freeDelivery === 'true'
    };

    this.addtocart.push(item1);
  }
  // searchproducts(){
  // var result=this.addtocart.filter((additem:any)=>additem.name.includes(this.search))
  // this.addtocart=result;
  // }
  search1()
  {

  }
  searchproducts(){
    
  //   this.addtocart = this.addtocart.filter(item => item.name.includes(data1) || item.price == data1 || item.rating == data1);
  //   console.log(addtocart);
  // }
  
  }
 
  showOnlyFreeDelivery() {
    this.addtocart = this.addtocart.filter(item => item.freeDelivery === "Yes");
    console.log(this.addtocart);
  }
  lowtohigh() {
    this.addtocart = this.addtocart.sort((a: any, b: any) => a.price - b.price);
    console.log(this.addtocart);
  }
  hightolow() {
    this.addtocart = this.addtocart.sort((a: any, b: any) => b.price - a.price);
    console.log(this.addtocart);
  }
  ratinghightolow() {
    this.addtocart = this.addtocart.sort((a: any, b: any) => a.rating - b.rating);
    console.log(this.addtocart);
  }

  ratinglowtohigh() {
    this.addtocart = this.addtocart.sort((a: any, b: any) => b.rating - a.rating);
    console.log(this.addtocart);
  }
  discount() {
    this.addtocart = this.addtocart.map(item => {
      return {
        ...item,
        price: item.price / 2
      };
    });
    console.log(this.addtocart);
  }
  pricewithdelivery() {

    this.addtocart = this.addtocart.map(item => {
      return {
        ...item,
        price: item.price + 20
      };
    });
    console.log(this.addtocart);
  }
  totalprice() {
    this.totalvalue = this.addtocart.reduce((sum: any, a: any) => sum + a.price, 0);
    console.log(this.addtocart)
    alert(`price: $${this.totalvalue}`);
  }
  Totalcartitems() {
    this.cartitems = this.addtocart.length;
    console.log(this.cartitems)
    alert(`cartitems: ${this.cartitems}`);
  }
  Delete(i: number) {
    this.addtocart.splice(i, 1)
  }


}





