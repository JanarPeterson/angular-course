import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  ngAfterViewInit(): void {
    console.log(this.cards.first);
  }

  onCourseSelected(course: Course) {
    console.log('Clicked in app', this.cards);
  }
}
