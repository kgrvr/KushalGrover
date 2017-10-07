import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  private projects = [
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
  ]

  constructor() { }

  ngOnInit() {
  }

}
