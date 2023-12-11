import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent {
  public galary:any=[]
  constructor(private  _galary:ImageService){

    _galary.getimages().subscribe(
      (data:any)=>
      {
        this.galary=data.data.memes;
      },
      (error:any)=>{
        alert("server error")
      }
    )
  }

}
