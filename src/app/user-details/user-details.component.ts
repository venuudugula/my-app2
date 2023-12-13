import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  public user: any = {};

  constructor(private _activateroute: ActivatedRoute, private _userservice: UserService) {
    _activateroute.params.subscribe(
      (data: any) => {
        console.log(data.id);
        _userservice.getUser(data.id).subscribe(
          (data: any) => {
            this.user = data;
          },
          (error: any) => {
            alert("internal server error");
          },
        )

      }
    )

  }
}


