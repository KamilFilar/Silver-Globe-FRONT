import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-intresting-facts',
  templateUrl: './home-intresting-facts.component.html',
  styleUrls: ['./home-intresting-facts.component.scss', './../../../../../assets/styling/global/fontSize.scss']
})

export class HomeIntrestingFactsComponent implements OnInit {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  listOfId = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10"
  }
  
  constructor() { }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
