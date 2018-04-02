import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { StatusColorPipe } from './pipes/status-color.pipe';
import { LanguagePipe } from './pipes/language.pipe';

import { DataService } from './services/data.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    StatusColorPipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterializeModule,
    RoundProgressModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
