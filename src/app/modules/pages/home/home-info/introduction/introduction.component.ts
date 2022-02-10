import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [
    './introduction.component.scss',
    './../../../../../../assets/styling/global/info.scss',
    './../../../../../../assets/styling/global/fontSize.scss'
  ]
})

export class IntroductionComponent implements OnInit {

  constructor() { }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
