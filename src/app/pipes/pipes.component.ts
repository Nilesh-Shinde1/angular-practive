import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myObject = {
    name : "Nilesh",
    age : 23,
    salary : 43350,
    doj : new Date(2021, 1, 8)
  }

  customPipe = "This is the demo content and we are creating a demo pipe to show trimmed content."

}
