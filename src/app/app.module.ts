import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackModule } from './back/back.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
