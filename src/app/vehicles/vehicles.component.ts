import { Component } from '@angular/core';
import { VehcleService } from '../vehcle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehic:any=[];

  constructor(private _vehicleservice:VehcleService,private _router:Router)
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
  view(id:number) {
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id)
  }
  edit(id:number){
    this._router.navigateByUrl("/dashboard/editvehicle-details/"+id);
  }
}
