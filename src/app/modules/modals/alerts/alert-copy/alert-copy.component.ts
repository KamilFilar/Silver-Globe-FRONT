import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert-copy',
  templateUrl: './alert-copy.component.html',
  styleUrls: ['./../../../../../assets/styling/global/alert.scss'],
})

export class AlertCopyComponent implements OnInit {
  
  faTimes = faTimes;
  iconImoji = './../../../../../assets/images/materials/emoji/happy.png';

  constructor() {}

  ngOnInit(): void {}
  
}
