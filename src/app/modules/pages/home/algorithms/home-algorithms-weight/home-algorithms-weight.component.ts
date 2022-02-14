import { Component, OnInit } from '@angular/core';
// import { MoonService } from 'src/app/config/moon.service';

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
    // private moonService: MoonService
  ) { }

  getInputValue(searchValue: string) {
    let isNum = /^\d+$/.test(searchValue);
    if(isNum == true) {
      let value: number =+ searchValue;
      this.getWeight(value);
    }
  }

  getWeight(weight: number){
    // this.moonService.getUserWeight(weight).then(
    //   (res) => {
    //     this.weightObj = res;
    //     this.moonWeight = this.weightObj.moon.toFixed(2);
    //     this.earthWeight = this.weightObj.earth.toFixed(2);
    //   }
    // )
  }  

  ngOnInit(): void {
    // Calc by default for 80kg
    this.getWeight(80);
  }

}
