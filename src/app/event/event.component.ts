import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    public user:string=''
    public names:string[]=[]

  submit()
  {
    this.names.push(this.user)
    this.user='';
  
  
  }
  Delete(){
    const index = this.names.indexOf(this.user);

  // Check if the user is in the array before attempting to delete
  if (index !==0) {
    // Remove the user from the array
    this.names.splice(index, 1);
  }
  }
}
