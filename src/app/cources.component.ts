import { Component } from "@angular/core";

@Component({
    selector:"courses",
    template:`
        <h1>{{getTitle()}}</h1>
        <ul>
            <li *ngFor="let course of getCourses()">{{course}}</li>
            <input [(ngModel)]="email" (keyup.enter)="clicked()">
        </ul> 
    `
}) 
export class CoursesComponent{
    title = "This is Title"
    courses = ["Java", "C", "MySQL"]
    email = "nic@mi.in";

    clicked(){
        console.log("Enter Clicked ", this.email)
    }
    
    getTitle(){
        return this.title;
    }

    getCourses(){
        return this.courses;
    }

} 