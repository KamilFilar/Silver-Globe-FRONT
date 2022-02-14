import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-state-data',
  templateUrl: './home-state-data.component.html',
  styleUrls: ['./home-state-data.component.scss']
})

export class HomeStateDataComponent implements OnInit {

  @Input() property = '';
  @Input() APIdata = '';
  @Input () APIdataPhase = '';
  @Input () APIdataBehavior = '';
  @Input() isLast!: boolean;

  constructor() { }

  ngOnInit(): void {    
  }

}
