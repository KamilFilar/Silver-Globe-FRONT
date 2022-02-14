import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-kordylewski-moons',
  templateUrl: './info-kordylewski-moons.component.html',
  styleUrls: ['./../../../../../../assets/styling/partials/info.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class InfoKordylewskiMoonsComponent implements OnInit {

  kordylweskiIMG = './../../../../../../assets/images/home-info/kordylweskiMoon.jpg';

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
