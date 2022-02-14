import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.scss'],
})

export class CollapseButtonComponent implements OnInit {
  
  @Input() href = '';
  @Input() ariacontrols = '';
  stateOfBtn = 1;
  text = '';

  constructor() {}

  getState() {
    if (this.stateOfBtn === 0) {
      this.stateOfBtn = 1;
    } else {
      this.stateOfBtn = 0;
    }
    return this.stateOfBtn;
  }

  ngOnInit(): void {}
}
