import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: [
    './page-not-found.component.scss', 
    './../../../../assets/styling/global/fontSize.scss'
  ]
})

export class PageNotFoundComponent implements OnInit {

  err = 'ERROR 404'
  img = '../../../../assets/images/page-not-found/UFO2.gif';
  casueInfo = 'Prawdopodobne przyczyny błędu:';
  casues = [
    'Niewłaściwy adres URL strony lub podstrony.',
    'Strona może być chwilowo niedostępna z uwagi na wprowadzane zmiany.',
    'Niewyczyszczone pliki cache (pamięci podręcznej) i pliki cookies (ciasteczka) przeglądarki.',
    'Złośliwe oprogramowanie, które wymusza komunikat błędu na określonych stronach i ich podstronach.'
  ];
  btnHref = '';

  constructor() { }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
