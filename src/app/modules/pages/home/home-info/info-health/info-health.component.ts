import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-health',
  templateUrl: './info-health.component.html',
  styleUrls: ['./../../../../../../assets/styling/partials/info.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class InfoHealthComponent implements OnInit {

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
