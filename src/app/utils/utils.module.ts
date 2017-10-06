import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ]
})
export class UtilsModule { }
