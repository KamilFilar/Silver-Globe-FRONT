import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-send-email',
  templateUrl: './admin-send-email.component.html',
  styleUrls: ['./../../../../../../assets/styling/global/alert.scss'],
})

export class AdminSendEmailComponent implements OnInit {
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
  
}
