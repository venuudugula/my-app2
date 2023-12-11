import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BoredomsService } from '../boredoms.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {
// public boredom:any={};

// constructor(private _boredomeservice:BoredomsService){

// _boredomeservice.getboredom().subscribe(

//   (data:any)=>{
//     this.boredom=data;
//   },
//   (error:any)=>
//   {
//     alert("internal server error")
//   }
// )
// }
public borde:any={};
constructor(private _boredomservice:BoredomsService){
  _boredomservice.getboredom().subscribe(
    (data:any)=>
    {
      this.borde=data;
    },
    (error:any)=>{
      alert("internal server  error");
    }
  )
}
refresh(){
  this._boredomservice.
  getboredom().subscribe(
    (data:any)=>
    {
      this.borde=data;
    },
    (error:any)=>{
      alert("internal server  error");
    }
  )
  
}

}
