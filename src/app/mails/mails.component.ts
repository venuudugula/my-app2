import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {
  public mails:any=[];
  constructor(private  _mailsservice:MailService){
    _mailsservice.getmails().subscribe(
      (data:any)=>
      {
        this.mails=data;
      },
      (error:any)=>{
        alert("internal server error")
      }

    )
  }

}
