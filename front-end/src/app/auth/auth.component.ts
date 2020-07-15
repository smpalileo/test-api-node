import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginForm: FormGroup;
  public signUpForm: FormGroup;
  public isLogin: boolean;
  public show;
  public formErrors: object;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.show = [false, false, false];
  }

  ngOnInit() {
    this.isLogin = true;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required, this.matchValues('password')]]
    });
    this.signUpForm.controls.password.valueChanges.subscribe(() => {
      this.signUpForm.controls.repeatPassword.updateValueAndValidity();
    });
  }

  public matchValues (matchTo: string): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  public toggleShow(field) {
    this.show[field] = !this.show[field];
  }

  public clearAll(form) {
    form === 'login' ? this.loginForm.reset() : this.signUpForm.reset();
  }

  public switch() {
    this.isLogin = !this.isLogin;
  }

  public login() {
    if(this.loginForm.valid){
      this.httpService.post('auth', this.loginForm.value)
        .then(res => {
          if(res.status != 1){
            alert(res.message);
            this.clearAll('login');
          } else {
            this.router.navigate(['/content'], {state: {user: this.loginForm.value}});
          }          
        });
    }
  }

  public signUp() {
    if(this.signUpForm.valid){
      this.httpService.put('auth', this.signUpForm.value)
      .then(res => {
        alert(res.message.alert);
      });
    }
  }
}
