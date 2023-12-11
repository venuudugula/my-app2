import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  public userForm = new FormGroup({
    name: new FormControl( null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required,Validators.min(100),Validators.max(0)]),
    phone: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(999999999)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    cards: new FormArray([]),
    type:new FormControl(),
    bussfee:new FormControl(),
    hostelfee:new FormControl(),
  
  })
  
  get cardsArray(){
    return this.userForm.get('cards') as FormArray;
  }
  
  add(){
    this.cardsArray.push(
      new FormGroup({
        no: new FormControl(),
        expairy: new FormControl(),
        cvv: new FormControl( null,[Validators.required])
      })

    )
  }
  
  submit(){
    console.log(this.userForm.value)
  }
  delete(i:number){
    this.cardsArray.removeAt(i)
  }
}
