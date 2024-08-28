import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistingComponent } from './bloglisting/bloglisting.component';
import { BlogaddnewComponent } from './blogaddnew/blogaddnew.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BlogupdateComponent } from './blogupdate/blogupdate.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BloglistingComponent,
    BlogaddnewComponent,
    BlogupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
