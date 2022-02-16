import { Component, OnInit } from '@angular/core';
import { MoonService } from 'src/app/config/services/moon.service';

@Component({
  selector: 'app-home-state',
  templateUrl: './home-state.component.html',
  styleUrls: [
    './home-state.component.scss', 
    './../../../../../assets/styling/global/fontSize.scss'
  ]
})

export class HomeStateComponent implements OnInit {
  btn = {
    href: '#moreData',
    ariacontrols: 'moreData',
  }
  // Var for actual state
  stateObj: any;
  value = {
    date: '',
    phase: '',
    age: '',
    behaviour: '',
    calcPhase: '',
    distance: '',
    illumination: '',
    nextNew: '',
    imagesPath: ''
  }

  constructor(
    private moonService: MoonService
  ) { }

  getState() {
    this.moonService.getCurrentPhase().then(
      (res) => {
        this.stateObj = res;
        this.value.date = this.getFormatedDate(this.stateObj.date);
        this.value.phase = this.stateObj.actualPhase;
        this.value.age = this.stateObj.age;
        this.value.behaviour = this.stateObj.behaviour;
        this.value.calcPhase = this.stateObj.calcPhase;
        this.value.distance = this.stateObj.distance + ' km';
        this.value.illumination = this.getPercentValue(this.stateObj.illumination) + '%';
        this.value.nextNew = this.getFormatedDate(this.stateObj.nextPhases.nextnew_date);
        this.value.imagesPath = this.stateObj.img;
      }
    )
  }

  getPercentValue(val: string) {
    let result = parseFloat(val);
    return result.toFixed(2);
  }

  getFormatedDate(val: string) {
    let date = new Date(val);
    let lang = "pl-PL";
    let result = 
      date.toLocaleDateString(lang, { day: "2-digit", month: '2-digit', year: "numeric" })
      + ' ' + 
      date.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    
      return result;
  }

  fontSizeFunc() {
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.getState();
    this.fontSizeFunc();
  }
}
