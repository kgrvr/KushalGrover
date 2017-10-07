import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ListItemComponent } from './list-item/list-item.component';
import { OpenInNewTabDirective } from './open-in-new-tab/open-in-new-tab.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListItemComponent,
    OpenInNewTabDirective
  ],
  exports: [
    ListItemComponent,
    OpenInNewTabDirective
  ]
})
export class UtilsModule { }
