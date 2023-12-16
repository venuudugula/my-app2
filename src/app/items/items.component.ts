import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  constructor(private _commonservice:CommonService){}

  add()
  {
    this._commonservice.setvallue();
  }

}
