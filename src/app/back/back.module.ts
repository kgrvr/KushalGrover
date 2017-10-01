import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutMeComponent,
    MyProjectsComponent,
    ContactMeComponent
  ],
  exports: [
    AboutMeComponent,
    MyProjectsComponent,
    ContactMeComponent
  ]
})
export class BackModule { }
