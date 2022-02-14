import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterContentInit, OnInit {

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService,
  ) {
    translate.addLangs(['pl', 'en', 'du']);
    translate.setDefaultLang(localStorage.getItem('storageLang')!);
  }

  checkCookies() {
    if (this.cookieService.get('acceptedCookies') === 'yes') {
      return false;
    }
    return true;
  }

  checkLang() {
    if (!localStorage.getItem('storageLang') || localStorage.getItem('storageLang') == undefined) {
      localStorage.setItem('storageLang', 'pl');
    }
  }

  checkFontSize() {
    if (
      localStorage.getItem('fontSize') !== 'li' &&
      localStorage.getItem('fontSize') !== 'sm' &&
      localStorage.getItem('fontSize') !== 'md' &&
      localStorage.getItem('fontSize') !== 'bg' &&
      localStorage.getItem('fontSize') !== 'hg'
    ) {
      localStorage.setItem('fontSize', 'li');
    }
  }
  
  ngAfterContentInit(): void {
    if (localStorage.getItem('fontSize') == undefined) {
      localStorage.setItem('fontSize', 'li');
    }
    this.checkFontSize();
  }

  ngOnInit(): void {
    this.checkLang();
    this.checkCookies();
  }

}
