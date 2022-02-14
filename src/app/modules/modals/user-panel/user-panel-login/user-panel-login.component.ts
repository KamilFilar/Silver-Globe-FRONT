import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-panel-login',
  templateUrl: './user-panel-login.component.html',
  styleUrls: [
    './user-panel-login.component.scss',
    './../../../../../assets/styling/global/fontSize.scss',
  ],
})

export class UserPanelLoginComponent implements OnInit {
  
  email: any;
  pass: any;
  faInfoCircle = faInfoCircle;
  faSignInAlt = faSignInAlt;

  loginBtn = {
    goToDashboard: 'Przejdź',
    href: '/Admin',
  };

  jokeObject: any;
  errorMsg = {
    question: '',
    answer: '',
  };

  showIcon = false;
  showForm = true;

  constructor(
    private cookieService: CookieService
  ) {}

  getRandomJoke() {
    // this.authService.getJoke().then((res) => {
    //   this.jokeObject = res;
    //   let str = this.jokeObject[0].joke;
    //   if (str.includes('?')) {
    //     this.errorMsg.question = str.substring(0, str.lastIndexOf('?')) + '?';
    //     this.errorMsg.answer = str.substring(str.lastIndexOf('?') + 1);
    //   }
    //   if (str.includes(':')) {
    //     this.errorMsg.question = str.substring(0, str.lastIndexOf(':')) + ':';
    //     this.errorMsg.answer = str.substring(str.lastIndexOf(':') + 1);
    //   }
    // });
  }

  login() {
    let email = (<HTMLInputElement>document.getElementById('emailInput')).value;
    let pass = (<HTMLInputElement>document.getElementById('passInput')).value;

    if (!email || !pass) {
      if (localStorage.getItem('storageLang') == 'pl') {
        this.errorMsg.question = 'Emial i hasło nie mogą być puste!';
      }
      if (localStorage.getItem('storageLang') == 'en') {
        this.errorMsg.question = 'Email and password cannot be empty!';
      }
    } else {
      // this.authService
      //   .getToken(email, pass)
      //   .then((res) => {
      //     if (res.msg === 'Success!') {
      //       this.cookieService.set('access_token', res.token);
      //       location.href = '/Admin';
      //     }

      //     if (res === 'Email or password is incorrect!') {
      //       this.clearMsg();

      //       // show joke if lang is pl
      //       if (localStorage.getItem('storageLang') == 'pl') {
      //         this.getRandomJoke();
      //       } else {
      //         this.errorMsg.question = res;
      //       }

      //       this.showIcon = true;
      //     }

      //     if (res === 'Bad email adress!') {
      //       this.clearMsg();

      //       // get msg in selected lang
      //       if (localStorage.getItem('storageLang') == 'pl') {
      //         this.errorMsg.question = 'To na pewno nie adres email!';
      //       } else {
      //         this.errorMsg.question = 'Invalid email adress!';
      //       }
      //       this.showIcon = true;
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }

  // This method clear error msg under login form
  clearMsg() {
    this.errorMsg.question = '';
    this.errorMsg.answer = '';
    this.showIcon = false;
  }

  hideLoginForm() {
    if (this.cookieService.get('access_token')) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.clearMsg();
    this.fontSizeFunc();
    this.hideLoginForm();
  }
  
}
