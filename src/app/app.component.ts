import { Component } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faChessKnight } from '@fortawesome/fontawesome-free-solid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor () {
    fontawesome.library.add(faChessKnight);
  }
}
