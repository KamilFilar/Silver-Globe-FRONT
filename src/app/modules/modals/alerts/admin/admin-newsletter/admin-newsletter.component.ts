import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-newsletter-alert',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./../../../../../../assets/styling/global/alert.scss'],
})

export class AdminNewsletterComponent implements OnInit {
  
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
  
}
