import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public id:any="";

public userform:FormGroup=new FormGroup({
  name:new FormControl(), 
phone:new FormControl(),
  city:new FormControl(),
  image:new FormControl()
});
// submit()
// {
//   console.log(this.userform);
// }
constructor(private  _UserService:UserService,private _activateroute:ActivatedRoute)
{
  _activateroute.params.subscribe(
    (data:any)=>{
      this.id=data.id;

      if(this.id){
        _UserService.getUser(data.id).subscribe(
          (data:any)=>{
            this.userform.patchValue(data);
          },
          (error:any)=>{
            alert("internal server error")
          }
        );
      }


    }
  )
}
submit()
{
  if(this.id)
  {
    this._UserService.edituser(this.id,this.userform.value).subscribe(
      (data:any)=>
      {
        alert("user updated sucessfully")
      },
      (error:any)=>
      {
        alert("internal server error")
      }
    )
  }
  else{
    console.log(this.userform.value);
    this._UserService.createuser(this.userform.value).subscribe(
      (data:any)=>
      {
        alert("user created successfully")
      },
      (error:any)=>
      {
        alert("internal server error");
      }
    )
  }
  }
}
 

