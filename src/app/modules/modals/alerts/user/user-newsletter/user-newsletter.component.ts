import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-newsletter',
  templateUrl: './user-newsletter.component.html',
  styleUrls: ['./../../../../../../assets/styling/global/alert.scss'],
})

export class UserNewsletterComponent implements OnInit {
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
  
}
