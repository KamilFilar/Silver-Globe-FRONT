import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-blue-moon',
  templateUrl: './blue-moon.component.html',
  styleUrls: [
    './../../../../../../assets/styling/global/info.scss',
    './../../../../../../assets/styling/global/fontSize.scss'
  ]
})
export class BlueMoonComponent implements OnInit {

  blueMoon = './../../../../../../assets/images/home/info/blueMoon.jpg'; 

  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
