import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AuthService } from './api/auth.service';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AuthComponent]
})
export class AppModule { }
