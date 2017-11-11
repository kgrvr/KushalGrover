import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  public projects = [
    {
      name: 'My Website',
      src: 'https://github.com/kgrvr/KushalGrover'
    },
    {
      name: 'Rainbow Weather',
      src: 'https://github.com/kgrvr/Rainbow-Weather-App'
    },
    {
      name: 'More on my Github',
      src: 'https://github.com/kgrvr/'
    }
  ];

  public articles = [
    {
      name: 'Reading Local JSON present in an Angular 2 project',
      src: 'https://medium.com/@kgrvr/reading-local-json-present-in-an-angular-2-project-733bc3dda18e'
    },
    {
      name: 'More on my Medium',
      src: 'https://medium.com/@kgrvr/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
