import { Component } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {

  log(value){ console.log(value); }

  onSubmit(formObj){
    console.log(formObj);
    console.log("form value",formObj.value);
  }
} 
