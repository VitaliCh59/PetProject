import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/interfaces";

@Component({
  selector: 'login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  constructor() { }
  hide = true;
  form: FormGroup


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  getErrorEmail() {
    if (this.form.get('email').hasError('required')) {
      return 'Вы должны ввести свой email';
    }else {
      return this.form.get('email').hasError('email') ? 'Email не подходит' : '';
    }
  }

  getErrorPassword() {
    if (this.form.get('password').hasError('required')) {
      return 'Введите Ваш пароль';
    }else if(this.form.get('password').hasError('minlength')) {
      return  `Ваш пароль слишком короткий. Нужно ещё ${(this.form.get("password").errors.minlength.requiredLength)-(this.form.get("password").errors.minlength.actualLength)} символов`;
    }
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const user:User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
  }
}
