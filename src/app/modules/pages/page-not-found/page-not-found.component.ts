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
  errorInfo = 'ERROR 404'
  img = '../../../../assets/images/page-not-found/UFO2.gif';
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
