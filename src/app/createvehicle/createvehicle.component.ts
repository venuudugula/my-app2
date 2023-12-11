import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehcleService } from '../vehcle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public vehicleform:FormGroup=new FormGroup({
    Vehicle:new FormControl(), 
    manufacturer:new FormControl(),
    model:new FormControl(),
    image:new FormControl()
  });

  constructor(private _vahicleservice:VehcleService)
  {

  }

submit()
{
  console.log(this.vehicleform.value);
  this._vahicleservice.createvehicle(this.vehicleform.value).subscribe(
    (data:any)=>
    {
      alert("Vehicle created successfully")
    },
    (error:any)=>
    {
      alert("internal server error");
    }
  )
}
}
