import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-personsetting',
  templateUrl: './personsetting.component.html',
  styleUrls: ['./personsetting.component.css']
})
export class personsettingComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private formbuilder: FormBuilder,private title: Title)
  {
    title.setTitle('personsetting');
    this.emailForm = this.formbuilder.group(
      {
        'email' : ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  subscribeNewsletter(event,formData)
  {
    event.preventDefault();
    console.log(formData);
    let controls = formData.controls;
    let email =   controls.email.value;

    if(!formData.valid)
    {
      controls.email._touched = true;
      return false;
    }
    else
    {
      alert('Thank you for your subscription.');
    }

  }

}
