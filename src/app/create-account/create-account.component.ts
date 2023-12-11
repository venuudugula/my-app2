import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

public accountform:FormGroup = new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  
  profie_picture:new FormControl(),
  


})

  constructor(private _createaccountservice:AccountService){

  }
  submit(){
    console.log(this.accountform.value);
  this._createaccountservice.createAccount(this.accountform.value).subscribe(
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
