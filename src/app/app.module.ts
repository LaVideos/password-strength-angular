import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StrengthCheckerComponent} from "./components/strength-checker/strength-checker.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    StrengthCheckerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
