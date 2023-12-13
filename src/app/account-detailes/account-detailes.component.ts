import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detailes',
  templateUrl: './account-detailes.component.html',
  styleUrls: ['./account-detailes.component.css']
})
export class AccountDetailesComponent {
  public account: any = {};
  constructor(private _activatedroute: ActivatedRoute, private _accountservice: AccountService) {

    _activatedroute.params.subscribe(
      (data:any)=>
      {
        console.log(data.id);
        _accountservice.getaccounts(data.id).subscribe(

          (data:any)=>
          {
            this.account=data;
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
