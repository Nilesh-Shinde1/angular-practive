import { Component } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {

  contactMethods = [
    {id:1, name:"phone"},
    {id:2, name:"email"}
  ];

  gender = [
    {id:1, name:"Male"},
    {id:2, name:"Female"}
  ];
  
  log(value){ console.log(value); }

  onSubmit(formObj){
    console.log(formObj);
    console.log("form value",formObj.value);
  }
} 
