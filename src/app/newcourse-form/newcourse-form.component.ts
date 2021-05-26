import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent {

  form =new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    (this.topics).push(new FormControl(topic.value));
    topic.value='';
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }

  removeTopic(topic:AbstractControl){
    let x=this.topics.controls.indexOf(topic);
    this.topics.removeAt(x);
  }

}
