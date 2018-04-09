import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  getFormationsData(): Observable<any> {
    return this._http.get('./assets/data/api/formations.json');
  }

  getJobsData(): Observable<any> {
    return this._http.get('./assets/data/api/jobs.json');
  }

  getSkillsData(): Observable<any> {
    return this._http.get('./assets/data/api/skills.json');
  }

}
