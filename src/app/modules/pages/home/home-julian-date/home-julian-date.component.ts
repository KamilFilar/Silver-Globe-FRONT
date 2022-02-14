import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MoonService } from 'src/app/config/moon.service';

@Component({
  selector: 'app-home-julian-date',
  templateUrl: './home-julian-date.component.html',
  styleUrls: ['./home-julian-date.component.scss', './../../../../../assets/styling/global/fontSize.scss']
})

export class HomeJulianDateComponent implements OnInit {

  link = 'https://pl.wikipedia.org/wiki/Data_julia%C5%84ska';
  currentJulianDate = '';
  jd: any;
  calcJulianDate = '';
  calcJd: any;
  events: string[] = []; 

  constructor(
    // private moon: MoonService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale(localStorage.getItem('storageLang'));
   }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, ) {
    this.events.push(`${type}: ${event.value}`);
    // get date
    let day = event.value!?.getDate();
    let month = event.value!?.getMonth();
    let year = event.value!?.getFullYear();
    // get current time
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // this.moon.getJulian(day, month, year, hour, min, sec).subscribe(
    //   res => {
    //     this.calcJd = res;
    //     this.calcJulianDate = this.calcJd.julianDate;
    //   }
    // )
  }

  getCurrentJulian(){
    // this.moon.getCurrentJulian().subscribe(
    //   res => {
    //     this.jd = res;
    //     this.currentJulianDate = this.jd.julianDate;
    //   }
    // )
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
