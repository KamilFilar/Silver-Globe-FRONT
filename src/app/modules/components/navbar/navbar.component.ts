import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private stateOfBtn = 0;
  private changeState = false;
  faHamburger = faHamburger;
  hrefs = {
    state: 'State',
    info: 'Informations',
    intresting: 'IntrestingFacts',
    calendar: 'Calendar',
    algorithms: 'API',
    contact: 'Contact',
  };
  text = {
    state: 'Aktualny stan',
    info: 'Informacje',
    intresting: 'Ciekawostki',
    calendar: 'Kalendarz',
    algorithms: 'API',
    contact: 'Kontakt',
    setIcon: '',
  };

  constructor() {}

  scrollToTop() {
    const URL = 'http://localhost:4200/';
    if (
      window.location.href == URL ||
      window.location.href == URL + '#Informations' ||
      window.location.href == URL + '#State' ||
      window.location.href == URL + '#IntrestingFacts' ||
      window.location.href == URL + '#Calendar' ||
      window.location.href == URL + '#API' ||
      window.location.href == URL + '#Contact'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else {
      location.href = '';
    }
  }

  checkScreenWidth() {
    let width = window.innerWidth;
    if (width >= 1200 && this.stateOfBtn == 1 && this.changeState == false) {
      this.changeState = true;
      this.stateOfBtn = 0;
    }
    if (width < 1200 && this.changeState == true) {
      this.changeState = false;
      this.stateOfBtn = 1;
    }
  }

  getState() {
    if (this.stateOfBtn === 0) {
      this.stateOfBtn = 1;
    } 
    else {
      this.stateOfBtn = 0;
    }
    return this.stateOfBtn;
  }

  changeNavColor() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll === 0 && this.stateOfBtn === 1) {
      return true;
    } 
    else if (winScroll > 0) {
      return true;
    } 
    else {
      return false;
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.changeNavColor());
    window.addEventListener('resize', () => this.checkScreenWidth());
  }
}
