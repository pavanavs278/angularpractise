import { PasswordValidator } from './password.valid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent  {

  form:FormGroup;

  constructor(fb : FormBuilder){
    this.form= fb.group({
      oldpassword:['',[Validators.required],
        PasswordValidator.validOldpassword ],
      newpassword:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]
    } ,{
      validator:PasswordValidator.passwordsShouldMatch
    });
  }

  get oldpassword(){
   return this.form.get('oldpassword');
  }
  get newpassword(){
    return this.form.get('newpassword');
   }
   get confirmpassword(){
    return this.form.get('confirmpassword');
   }
}
