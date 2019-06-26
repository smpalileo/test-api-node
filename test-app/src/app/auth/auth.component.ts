import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStore } from '../core/store/app.store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;
  public show: boolean;
  public authError: string;

  constructor(
    private formBuilder: FormBuilder,
    public appStore: AppStore
  ) { }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public toggleShow() {
    this.show = !this.show;
  }

  public auth() {
    this.authError = '';
    if (this.loginForm.invalid) {
      this.authError = 'Invalid email and/or password';
      return;
    }
    // this.appStore.auth(this.loginForm.getRawValue()).catch(() => {
    //   this.authError = 'Invalid email and/or password';
    //   this.cd.markForCheck();
    // });
  }

}
