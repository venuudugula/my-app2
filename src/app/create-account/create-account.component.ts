import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  public id:any="";
public accountform:FormGroup = new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  profie_picture:new FormControl(),
})

  constructor(private _createaccountservice:AccountService,private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>
      {
        this.id=data.id;
        if(this.id)
        {
          _createaccountservice.getaccounts(data.id).subscribe(
            (data:any)=>
            {
              this.accountform.patchValue(data);
            },
            (error:any)=>
            {
              alert("internal error")
            }
          )
        }
        
      }
    )

  }
  submit(){
   // console.log(this.accountform.value)
    if(this.id)
    {
      //editing account
    this._createaccountservice.Editaccount(this.id,this.accountform.value).subscribe(
      (data:any)=>
      {
        alert("account details updated succefully")
      },
      (error:any)=>
      {
        alert("internal server error")
      }
    )

    }
    else{

      //create
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
}
