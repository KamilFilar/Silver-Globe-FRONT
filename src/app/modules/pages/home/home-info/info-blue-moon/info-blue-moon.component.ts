import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-blue-moon',
  templateUrl: './info-blue-moon.component.html',
  styleUrls: ['./../../../../../../assets/styling/partials/info.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class InfoBlueMoonComponent implements OnInit {

  blueMoon = './../../../../../../assets/images/home-info/blueMoon.jpg';
  
  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
