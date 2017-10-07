import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Feature modules
import { UtilsModule } from '../utils/utils.module';

// Components
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
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
