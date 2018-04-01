import { Component, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faChessKnight, faCircleNotch, faChartBar } from '@fortawesome/fontawesome-free-solid';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentLanguage: string;
  public skills: Array<any>;
  public showCirclesGraph: Boolean = false;
  public me: any = {
    name: 'Juan David Maldonado',
    age: 26,
    socialBusiness: `<strong>
      <a class="green-text" href="http://www.socialbusiness.com.co" target="blank">Social Business</a>
    </strong>`
  };

  constructor(private _translateService: TranslateService) {
    fontawesome.library.add(faChessKnight, faCircleNotch, faChartBar);

    const browserLanguage = _translateService.getBrowserLang();
    _translateService.setDefaultLang(browserLanguage);
    this.switchLanguage(browserLanguage);
  }

  ngOnInit(): void {
    this._initSkills();
  }

  private _initSkills(): void {
    this.skills = [
      {
        current: 90,
        max: 100,
        name: 'HTML'
      },
      {
        current: 70,
        max: 100,
        name: 'CSS'
      },
      {
        current: 90,
        max: 100,
        name: 'Javascript'
      },
      {
        current: 80,
        max: 100,
        name: 'Angular'
      },
      {
        current: 75,
        max: 100,
        name: 'NodeJs'
      },
      {
        current: 85,
        max: 100,
        name: 'Git'
      },
      {
        current: 60,
        max: 100,
        name: '.Net'
      },
      {
        current: 70,
        max: 100,
        name: 'MongoDB',
      },
      {
        current: 85,
        max: 100,
        name: 'Firebase',
      },
      {
        current: 90,
        max: 100,
        name: 'Ionic',
      },
      {
        current: 40,
        max: 100,
        name: 'VueJs',
      }
    ];
  }

  public switchLanguage(language: string) {
    this._translateService.use(language);
    this.currentLanguage = language;
  }
}
