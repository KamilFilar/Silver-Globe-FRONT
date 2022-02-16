import { Component, OnInit } from '@angular/core';
import { MoonService } from 'src/app/config/services/moon.service';

@Component({
  selector: 'app-home-algorithms-weight',
  templateUrl: './home-algorithms-weight.component.html',
  styleUrls: ['./home-algorithms-weight.component.scss']
})

export class HomeAlgorithmsWeightComponent implements OnInit {
  weightObj: any;
  moonWeight = 0;
  earthWeight = 0;

  constructor(
    private moonService: MoonService
  ) { }

  getInputValue(searchValue: string) {
    if(searchValue == '') {
      this.moonWeight = 0;
      this.earthWeight = 0;
    }

    const isNum = /^\d+$/.test(searchValue);
    if(isNum == true) {
      let value: number =+ searchValue;
      this.getWeight(value);
    }
  }

  getWeight(weight: number){
    this.moonService.calcWeight(weight).then(
      (res) => {
        this.weightObj = res;  
        this.moonWeight = this.weightObj.moon.toFixed(2);
        this.earthWeight = this.weightObj.earth.toFixed(2);
      }
    )
  }  

  ngOnInit(): void {
    this.getWeight(80);
  }
}