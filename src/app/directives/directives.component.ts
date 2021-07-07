import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  items = ['Book', 'Pen', 'Mobile'];
  viewMode = '';
  courses = [
    { id:1, name: 'Java'},
    { id:2, name: 'MySQL'},
    { id:3, name: 'C#'}
  ];
  data;
  teachers = {
    id:3,
    info: null
    // {
    //   name :'Mahi'
    // }
  };

  insert(){
    this.courses.push({ id:4, name:'Spring'});
  }
  
  delete(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  
  update(course) {
    course.name = 'Updated';
  }

  loadData(){
    this.data = [
      {id:1, name:'Nilesh'},
      {id:2, name:'Rao'},
      {id:3, name:'Pandit'}
    ]
  }

  trackData(data){
    return data ? data.id : undefined;
  }
}
