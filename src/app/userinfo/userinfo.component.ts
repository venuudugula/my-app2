import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  public users:any=[];

  constructor(private _usersservice:UsersService)
  {
    _usersservice.getusers().subscribe(
      (data:any)=>
      {
        this.users=data.users;
      },
      (error:any)=>
      {
        alert("intsernal server error");
      }
     
    )
  }
  onclick()
  { 
    // if(this.users==true)
    // {
    //   this.users==true;
    // }
    
     
  }
}
