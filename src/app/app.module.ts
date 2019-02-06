import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { NgxGaugeModule } from 'ngx-gauge';
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    NgxGaugeModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
