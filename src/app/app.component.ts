import { Component, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faChessKnight } from '@fortawesome/fontawesome-free-solid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public skills: Array<any>;

  constructor() {
    fontawesome.library.add(faChessKnight);
  }

  ngOnInit(): void {
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
      },
    ];
  }
}
