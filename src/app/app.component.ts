import { Component } from '@angular/core';

@Component({ // This is a decorator
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: "<h1>Student List!</h1>",
  styles: ["h1 { color: red; }"]
})
export class AppComponent {
  title = 'student-list';
}
