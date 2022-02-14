import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MoonService } from 'src/app/config/moon.service';

@Component({
  selector: 'app-home-state-more',
  templateUrl: './home-state-more.component.html',
  styleUrls: ['./home-state-more.component.scss']
})

export class HomeStateMoreComponent implements OnInit {

  @Input() property = '';
  @Input() APIdata = '';
  @Input() isLast!: boolean;
  img1 = '../../../../../../assets/images/common/moonFirst.gif';
  img2 = '../../../../../../assets/images/common/moonBlack.gif';
  lang = "pl-PL";
  // Var for calc state
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
    private dateAdapter: DateAdapter<Date>,
    // private moon: MoonService
  ) {
    this.dateAdapter.setLocale(localStorage.getItem('storageLang'));
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);

    let day = event.value!?.getDate();
    let month = event.value!?.getMonth();
    let year = event.value!?.getFullYear();
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // this.moon.getPhase(day, month, year, hour, min, sec).subscribe(
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
    let result = date.toLocaleDateString(this.lang, { day: "2-digit", month: '2-digit', year: "numeric" })
      + ' ' + date.toLocaleTimeString(this.lang, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    return result;
  }

  getPhase(phase: string) {
    let result = phase;
    return result;
  }

  ngOnInit(): void {
  }
  
}
