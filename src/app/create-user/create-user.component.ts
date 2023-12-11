import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
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
constructor(private  _UserService:UserService)
{

}
submit()
{
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
