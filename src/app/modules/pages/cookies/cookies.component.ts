import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: [
    './cookies.component.scss',
    './../../../../assets/styling/global/fontSize.scss',
    './../../../../assets/styling/partials/info.scss'
  ]
})

export class CookiesComponent implements OnInit {

  imgCookie = './../../../../assets/images/cookies/cookie.jpg';

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }
  
}
