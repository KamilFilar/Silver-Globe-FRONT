import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MoonService } from 'src/app/config/services/moon.service';

@Component({
  selector: 'app-home-state-more',
  templateUrl: './home-state-more.component.html',
  styleUrls: ['./home-state-more.component.scss']
})

export class HomeStateMoreComponent implements OnInit {
  @Input() property = '';
  @Input() APIdata = '';
  @Input() isLast!: boolean;
  // Var for calc state
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
    private dateAdapter: DateAdapter<Date>,
    private moonService: MoonService
  ) {
    this.dateAdapter.setLocale(localStorage.getItem('storageLang'));
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    let date = new Date();
    let dateString = event.value?.toDateString() + ' ' + date.toTimeString();

    this.moonService.calcPhase(dateString!).then(
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

  getPhase(phase: string) {
    let result = phase;
    return result;
  }

  ngOnInit(): void {
  }
  
}
