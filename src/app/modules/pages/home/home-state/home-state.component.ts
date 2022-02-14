import { Component, OnInit } from '@angular/core';
// import { MoonService } from 'src/app/config/moon.service';

@Component({
  selector: 'app-home-state',
  templateUrl: './home-state.component.html',
  styleUrls: ['./home-state.component.scss', './../../../../../assets/styling/global/fontSize.scss']
})

export class HomeStateComponent implements OnInit {

  btn = {
    href: '#moreData',
    ariacontrols: 'moreData',
  }
  // Var for actual state
  state: any;
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
    // private moon: MoonService
  ) { }

  getState() {
    // this.moon.getCurrentPhase().subscribe(
    //   res => {
    //     this.state = res;
    //     this.value.date = this.getFormatedDate(this.state.date);
    //     this.value.phase = this.state.actualPhase;
    //     this.value.age = this.state.age;
    //     this.value.behaviour = this.state.behaviour;
    //     this.value.calcPhase = this.state.calcPhase;
    //     this.value.distance = this.state.distance + ' km';
    //     this.value.illumination = this.getPercentValue(this.state.illumination) + '%';
    //     this.value.nextNew = this.getFormatedDate(this.state.phases.nextnew_date);
    //     this.value.imagesPath = this.state.img;
    //   }
    // )
  }

  getPercentValue(val: string) {
    let result = parseFloat(val);
    return result.toFixed(2);
  }

  getFormatedDate(val: string) {
    let date = new Date(val);
    let lang = "pl-PL";
    let result = date.toLocaleDateString(lang, { day: "2-digit", month: '2-digit', year: "numeric" })
      + ' ' + date.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
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
