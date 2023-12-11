import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(private _loginservice:LoginService,private _router:Router){}
  login(){
    console.log(this.loginform);
    this. _loginservice.login(this.loginform.value).subscribe(
      (data:any)=>{
        alert("login successfully");
        //store
        localStorage.setItem("token",data.token);
        //go to dashboard
        this._router.navigateByUrl("/dashboard")
      },
      (error:any)=>{
        alert("invalid user");
      }
    )
  }
}
