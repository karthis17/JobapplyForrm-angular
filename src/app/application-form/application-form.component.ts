import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phon = new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  skill = new FormControl('', Validators.required);

  matcher = new MyErrorStateMatcher();

  submit(){
    console.log(this.dob.value);
  }
}
