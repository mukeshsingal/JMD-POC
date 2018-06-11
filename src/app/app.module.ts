import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule} from "angular-font-awesome";
import {
  MatButtonModule,
  MatCheckboxModule, MatFormFieldControl, MatFormFieldModule, MatIcon, MatIconModule, MatInputModule, MatSidenavModule,
  MatToolbar,
  MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AngularFontAwesomeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
