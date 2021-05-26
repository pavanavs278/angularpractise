import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewcourseFormComponent } from './newcourse-form/newcourse-form.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewcourseFormComponent,
    PasswordChangeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
