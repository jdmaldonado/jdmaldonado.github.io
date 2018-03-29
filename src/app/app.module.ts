import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { AppComponent } from './app.component';
import { StatusColorPipe } from './pipes/status-color.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StatusColorPipe
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
