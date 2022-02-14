import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-progressbar',
  templateUrl: './navbar-progressbar.component.html',
  styleUrls: ['./navbar-progressbar.component.scss'],
})

export class NavbarProgressbarComponent implements OnInit {
  private progress = 0;

  constructor() {}

  calcScrollPosition() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.progress = scrolled;
    return this.progress;
  }

  ngOnInit(): void {
    window.onscroll = () => this.calcScrollPosition();
  }
}
