import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})

export class UserPanelComponent implements OnInit {
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
  
}
