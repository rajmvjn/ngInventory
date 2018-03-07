import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AppModule { }
