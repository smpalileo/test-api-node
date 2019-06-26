import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// SERVICES
import { AuthService } from './services/auth.service';
import { ContentService } from './services/content.service';
import { HttpService } from './services/http.service';
import { UtilityService } from './services/utility.service';

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
