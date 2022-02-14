import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-moon-mission',
  templateUrl: './info-moon-mission.component.html',
  styleUrls: [
  './../../../../../../assets/styling/partials/info.scss', 
  './../../../../../../assets/styling/global/fontSize.scss'
  ]
})

export class InfoMoonMissionComponent implements OnInit {

  apolloIMG = './../../../../../../assets/images/home-info/apollo.jpg';

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
