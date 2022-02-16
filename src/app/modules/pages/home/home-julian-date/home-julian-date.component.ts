import { Component, OnInit } from '@angular/core';
import { MoonService } from 'src/app/config/services/moon.service';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-home-julian-date',
  templateUrl: './home-julian-date.component.html',
  styleUrls: [
    './home-julian-date.component.scss', 
    './../../../../../assets/styling/global/fontSize.scss'
  ]
})

export class HomeJulianDateComponent implements OnInit {
  link = 'https://pl.wikipedia.org/wiki/Data_julia%C5%84ska';
  currentJulianDate = '';
  calcJulianDate = '';
  jdObject: any;

  calcJd: any;
  events: string[] = []; 

  constructor(
    private moonService: MoonService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale(localStorage.getItem('storageLang'));
   }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, ) {
    this.events.push(`${type}: ${event.value}`);
    let date = new Date();
    let dateString = event.value?.toDateString() + ' ' + date.toTimeString();
    
    this.moonService.calcJD(dateString!).then(
      (res) => {
        this.jdObject = res;
        this.calcJulianDate = this.jdObject.julianDate;
      }
    )
  }

  getCurrentJulian(){
    this.moonService.getCurrentJD().then(
      (res) => {
        this.jdObject = res;
        this.currentJulianDate = this.jdObject.julianDate;
      }
    )
  }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.getCurrentJulian();
    this.fontSizeFunc();
  }
}