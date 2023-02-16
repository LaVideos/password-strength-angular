import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  strongPassword:boolean = false;
  show:boolean = false;

  form = new FormGroup({
    password: new FormControl("",  {validators:[Validators.minLength(8)]}),
  });

  get f() {
    return this.form.controls;
  }

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }

  showPassword() {
    this.show = !this.show
  }

}
