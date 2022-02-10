import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-health',
  templateUrl: './health.component.html',
  styleUrls: [
    './../../../../../../assets/styling/global/info.scss',
    './../../../../../../assets/styling/global/fontSize.scss'
  ]
})
export class HealthComponent implements OnInit {

  constructor() { }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
