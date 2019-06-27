import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginForm: FormGroup;
  public show: boolean;
  public formErrors: object;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['super', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  public toggleShow() {
    this.show = !this.show;
  }

  public submit() {
    this.httpService.post('auth', this.loginForm.value)
      .then(res => {
        alert(res.message.alert);
        if(res.status == 1)
          this.router.navigate(['/content']);
      });
  }

}
