import { Component, OnInit, HostListener } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faChessKnight, faCircleNotch, faChartBar } from '@fortawesome/fontawesome-free-solid';
import { faFacebookF } from '@fortawesome/fontawesome-free-brands';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentLanguage: string;
  public skills: Array<any>;
  public jobs: Array<any>;
  public showCirclesGraph: Boolean = false;
  public navBarClass = 'navbar-transparent';
  public me: any = {
    name: 'Juan David Maldonado',
    age: 26,
    socialBusiness: `<strong>
      <a class="green-text" href="http://www.socialbusiness.com.co" target="blank">Social Business</a>
    </strong>`
  };

  constructor(
    private _dataService: DataService,
    private _translateService: TranslateService
  ) {
    fontawesome.library.add(faChessKnight, faCircleNotch, faChartBar, faFacebookF);

    const browserLanguage = _translateService.getBrowserLang();
    _translateService.setDefaultLang(browserLanguage);
    this.switchLanguage(browserLanguage);
  }

  ngOnInit(): void {
    this._getData();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 500) {
      this.navBarClass = 'navbar-transparent';
    } else {
      this.navBarClass = 'navbar-color';
    }

  }

  private _getData(): void {
    this._dataService.getSkillsData()
      .subscribe((skills) => this.skills = skills);

    this._dataService.getJobsData()
      .subscribe((jobs) => this.jobs = jobs.reverse());
  }

  private _initMaterializeElements(): void {
    $('.scrollspy').scrollSpy();
  }

  public switchLanguage(language: string) {
    this._translateService.use(language);
    this.currentLanguage = language;
  }
}
