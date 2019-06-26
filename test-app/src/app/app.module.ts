import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { AngularMaterialModule } from './core/angular.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppStore } from './core/store/app.store';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ContentComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
