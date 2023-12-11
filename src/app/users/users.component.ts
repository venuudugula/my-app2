import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public term: string = "";
  public Users: any = [];
  public colom:string="";
  public order:string="";
  public pageno:number=0;
  constructor(private _userservice: UserService) {

    _userservice.getUsers().subscribe(
      (data: any) => {
        this.Users = data;
      },
      (error: any) => {
        alert("internal server error")
      }
    )
    
  }
  getfilterdUser()
    {
      this._userservice.getfilterdUser(this.term).subscribe(

        (data: any) => {
          this.Users = data;
        },
        (error: any) => {
          alert("snkjngkngssgg")
        }
      )
    }
    sort()
    {
      this._userservice.getsorteddUser(this.colom,this.order).subscribe(

        (data: any) => {
          this.Users = data;
        },
        (error: any) => {
          alert("snkjngkngssgg")
        }
      )
    }
    page()
    {
      this._userservice.getpageUsers(this.pageno).subscribe(

        (data: any) => {
          this.Users = data;
        },
        (error: any) => {
          alert("internal server error")
        }
      )
    }
    deleteUser(id:string)
    {
      this._userservice.deleteUser(id).subscribe(

        (data: any) => {
        alert("deleted successfully")
        location.reload;
        },
        (error: any) => {
          alert("internal server error")
        }
      )
    }

}
