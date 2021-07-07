import { TeachersService } from './teachers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(service : TeachersService) {
    this.teachers = service.getTeachers();
  }

  ngOnInit(): void {
  }

  teachers;

  getNames(){
    return this.teachers;
  }

}
