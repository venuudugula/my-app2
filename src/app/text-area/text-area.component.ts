import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  public textarea:string="";
  // public error:string="";
  onInputChange() {
    // Limit the textarea to 30 characters
    if (this.textarea.length > 30) {
      this.textarea = this.textarea.slice(0, 30);
      alert("Text area will allow only 30 count")
      
    }
  
  }
}
