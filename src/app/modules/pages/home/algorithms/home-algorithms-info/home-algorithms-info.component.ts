import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-algorithms-info',
  templateUrl: './home-algorithms-info.component.html',
  styleUrls: ['./home-algorithms-info.component.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class HomeAlgorithmsInfoComponent implements OnInit {

  constructor() { }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }
  
}
