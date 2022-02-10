import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-kordylweski',
  templateUrl: './kordylweski.component.html',
  styleUrls: [
    './../../../../../../assets/styling/global/info.scss',
    './../../../../../../assets/styling/global/fontSize.scss'
  ]
})
export class KordylweskiComponent implements OnInit {

  kordylweskiIMG = './../../../../../../assets/images/home/info/kordylweskiMoon.jpg';

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
