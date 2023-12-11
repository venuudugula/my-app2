import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  public name:string="abcdefg";
  public name2:string="XYZ";
  public today:any=new Date();

  public product:any={
  name:'laptop',
  price:50000
  }

}
