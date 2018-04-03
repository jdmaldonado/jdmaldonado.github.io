import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguageService {

  private _currentLanguage = new Subject<string>();

  constructor(private _translateService: TranslateService) {
  }

  getCurrentLanguage(): Observable<string> {
    return this._currentLanguage.asObservable();
  }

  configureLanguage(): void {
    const userLanguage = window.localStorage.getItem('language');
    if (!userLanguage) {
      const browserLanguage = this._translateService.getBrowserLang();
      this.setLanguage(browserLanguage);
    } else {
      this.setLanguage(userLanguage);
    }
  }

  setLanguage(language: string): void {
    this._currentLanguage.next(language);
    window.localStorage.setItem('language', language);
    this._translateService.use(language);
  }

}
