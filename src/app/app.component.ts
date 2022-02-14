import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private cookieService: CookieService
  ) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang(localStorage.getItem('storageLang')!);
  }

  checkCookies() {
    if (this.cookieService.get('acceptedCookies') === 'yes') 
      return false;

    return true;
  }

  checkLang() {
    if (
      !localStorage.getItem('storageLang') ||
      localStorage.getItem('storageLang') == undefined
    )
      localStorage.setItem('storageLang', 'pl');
  }

  checkFontSize() {
    let fontSize = localStorage.getItem('fontSize');
    if (
      fontSize !== 'li' &&
      fontSize !== 'sm' &&
      fontSize !== 'md' &&
      fontSize !== 'bg' &&
      fontSize !== 'hg'
    )
      localStorage.setItem('fontSize', 'li');
  }

  ngOnInit(): void {
    this.checkLang();
    this.checkCookies();
    this.checkFontSize();
  }
}
