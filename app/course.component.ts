import { Component } from 'angular2/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'
// import { LocalStorage, SessionStorage } from "angular2-localstorage";

@Component({
    selector: 'course',
    template: `<h2>My first Course</h2>
    {{title}}
    <input type="text" autoGrow />
    <ul>
    <li *ngFor="#course of courses">{{course}}</li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CourseComponent {
    title = "The title of the course is angular2";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }




}