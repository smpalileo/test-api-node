import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'content', component: ContentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
