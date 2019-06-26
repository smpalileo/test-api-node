import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// SERVICES
import {
  AuthService,
  ContentService,
  HttpService,
  UtilityService
} from './services';

// STORE
import { AppStore } from './store/app.store';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    // SERVICES
    AuthService,
    ContentService,
    HttpService,
    UtilityService,

    // STORE
    AppStore
  ]
})
export class CoreModule {}
