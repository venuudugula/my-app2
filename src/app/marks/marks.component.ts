import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public students: any=[
    {name:'a',marks:'100',grade:'a'},
    {name:'b',marks:'80',grade:'b'},
    {name:'c',marks:'50',grade:'c'},
    {name:'d',marks:'30',grade:'d'}

  ]

}
