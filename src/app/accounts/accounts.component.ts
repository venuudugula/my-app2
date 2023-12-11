import { Component, TemplateRef } from '@angular/core';
import { AccountService } from '../account.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts:any=[];
    deleteaccount: any;
    public colom:string="";
    public order:string="";
    public term:string="";
    public pageno:number=0;
  // public accots:string=""

  constructor(private _accountservice:AccountService)
  {
    _accountservice.getaccount().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (error:any)=>
      {
        alert("internal server error")
      }   
    )
  }
  deleteUser(id:string)
    {
      this._accountservice.deleteaccount(id).subscribe(

        (data: any) => {
        alert("deleted successfully")
        location.reload;
        },
        (error: any) => {
          alert("internal server error")
        }
      )
    }
    sortaccountusers(){
      this._accountservice.sortaccountusers(this.colom,this.order).subscribe(
        (data: any) => {
        this.accounts=data
          },
          (error: any) => {
            alert("internal server error")
          }
      )
    }
    getfilteraccount(){
      this._accountservice.getfilteraccount(this.term).subscribe(
        (data:any)=>
        {
          this.accounts=data;
        },
        (error:any)=>
        {
          alert("internal server error")
        }
      )
    }
    page(){
      this._accountservice.page(this.pageno).subscribe(
        (data:any)=>
        {
          this.accounts=data
        },
        (error:any)=>
        {
          alert("internal server error")
        }
      )
    }
}
  


