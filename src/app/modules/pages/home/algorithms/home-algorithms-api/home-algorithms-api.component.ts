import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-algorithms-api',
  templateUrl: './home-algorithms-api.component.html',
  styleUrls: [
    './home-algorithms-api.component.scss', 
    './../../../../../../assets/styling/global/fontSize.scss'
  ]
})

export class HomeAlgorithmsApiComponent implements OnInit {
  API = 'API';
  types = {
    get: 'GET',
    post: 'POST'
  }
  values = {
    getActualJD: 'http://localhost:8015/api/moon/julian-date',
    getParamsJD: 'http://localhost:8015/api/moon/julian-date/YourDateString',
    getCurrentPhase: 'http://localhost:8015/api/moon/phase',
    getPhase: 'http://localhost:8015/api/moon/phase/YourDateString',
    getWeight: 'http://localhost:8015/api/moon/weight?userWeight='
  }
  stateOfIcon = 0;
  iconName: any;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() { }

  changeIcon() {
    if (this.stateOfIcon == 0) {
      this.stateOfIcon = 1;
      this.iconName = faArrowDown;
    }
    else {
      this.stateOfIcon = 0;
      this.iconName = faArrowUp;
    }
  }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.changeIcon();
    this.fontSizeFunc();
  }
}