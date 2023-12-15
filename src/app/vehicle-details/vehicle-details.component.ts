import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { VehcleService } from '../vehcle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  // public vehicle:any="";
  // constructor(private _activateroute:ActivatedRoute,private _vehicleservice: VehcleService){
  //   _activateroute.params.subscribe(
  //     (data:any)=>
  //     {
  //       console.log(data.id);
  //       _vehicleservice.getvehicle(data.id).subscribe(
  //         (data:any)=>
  //         {
  //           this.vehicle=data;
  //         },
  //         (error:any)=>
  //         {
  //           console.log("internal server error");
  //         }
  //       )
  //     }
  //   )
  // }

  public vehicle: any = {};
  constructor(private _activatedroute: ActivatedRoute, private _vehicleservice:VehcleService) {

    _activatedroute.params.subscribe(
      (data:any)=>
      {
        console.log(data.id);
        _vehicleservice.getvehicle(data.id).subscribe(

          (data:any)=>
          {
            this.vehicle=data;
          },
          (error:any)=>
          {
            console.log("internal server error")
          }
        )
      }
      )
  }
}
