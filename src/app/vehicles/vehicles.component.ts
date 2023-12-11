import { Component } from '@angular/core';
import { VehcleService } from '../vehcle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehic:any=[];

  constructor(private _vehicleservice:VehcleService)
  {

    _vehicleservice.getvehicles().subscribe(
      (data:any)=>
      {
        this.vehic=data;
      },
      (error:any)=>
      {
        alert("server error")
      }

    )
  }

}
