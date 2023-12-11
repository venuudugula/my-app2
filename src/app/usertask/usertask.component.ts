import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-usertask',
  templateUrl: './usertask.component.html',
  styleUrls: ['./usertask.component.css']
})
export class UsertaskComponent {
  public userForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.max(10)]),
    Class:new FormControl( null,[Validators.required, Validators.max(99), Validators.min(1)]),
    Fathername:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.max(10)]),
    Email:new FormControl(null,[Validators.required,Validators.email]),
    address:new FormGroup({
      addressLine:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      city:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.max(10)]),
      state:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.max(10)]),
      pincode:new FormControl(null,[Validators.required,Validators.min(5),Validators.max(10)])
    }),
    student: new FormArray([]),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),

  })
  get student(){
    return this.userForm.get('student') as FormArray;
  }
  add(){
            this.student.push(
                new FormGroup({
                class: new FormControl(null,[Validators.required,Validators.minLength(99),Validators.max(9)]),
                year: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.max(4)]),
                persontage: new FormControl(null,[Validators.required,Validators.minLength(9),Validators.max(99)])
              })
  )}
  submit(){
    console.log(this.userForm.value)
  }
  delete(i:number){
    this.student.removeAt(i)
  }
  }
  