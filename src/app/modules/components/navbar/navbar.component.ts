import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  faHamburger = faHamburger;
  hrefs = {
    state: 'State',
    info: 'Informations',
    intresting: 'IntrestingFacts',
    algorithms: 'Algorithms',
    contact: 'Contact'
  };
  text = {
    setIcon: '',
  };
  private stateOfBtn = 0;
  private changeState = false;

  constructor() {}

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
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

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
