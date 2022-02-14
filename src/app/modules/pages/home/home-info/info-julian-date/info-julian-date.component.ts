import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-julian-date',
  templateUrl: './info-julian-date.component.html',
  styleUrls: ['./../../../../../../assets/styling/partials/info.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class InfoJulianDateComponent implements OnInit {

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
