import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/interfaces";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  hide = true;
  form: FormGroup;
  submitted: boolean = false;
  message: string;


  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe( (params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, авторизуйтесь для нового бронирования или просмотра существующих бронирований'
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
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
    this.submitted = true;
    if (this.form.invalid) {
      return
    }

    const user:User = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    this.auth.login(user).subscribe( ()=> {
      this.form.reset();
      if (user.email === 'admin@mail.com') {
        this.router.navigate(['/admin/manage-reservation']);
      } else {
        this.router.navigate(['/my-reservations']);
      }
      this.submitted = false;
    }, error => {
      this.submitted = false;
    })
  }
}
