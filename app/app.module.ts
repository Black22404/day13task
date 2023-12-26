import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ErrorComponent } from './error/error.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EditComponent } from './edit/edit.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TempdrivneformComponent } from './tempdrivneform/tempdrivneform.component';
import { ReactiveformexpComponent } from './reactiveformexp/reactiveformexp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    ErrorComponent,
    AdduserComponent,
    ViewuserComponent,
    EditComponent,
    TempdrivneformComponent,
    ReactiveformexpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    FormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
