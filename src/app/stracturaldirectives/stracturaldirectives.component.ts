import { Component } from '@angular/core';

@Component({
  selector: 'app-stracturaldirectives',
  templateUrl: './stracturaldirectives.component.html',
  styleUrls: ['./stracturaldirectives.component.css']
})
export class StracturaldirectivesComponent {
  public names:string[]=['venu','madhuyadav','gangaiah','rajamani']
  public states :string[]=['andra','telangana','kerala']
  public products :any=[
    {
      name:'pen',price:25},
      {name:'pencil',price:10},
      {name:'book',price:50}
  ]
  public num :number=0
 
}


