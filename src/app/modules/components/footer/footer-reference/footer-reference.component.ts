import { Component, Input, OnInit } from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-reference',
  templateUrl: './footer-reference.component.html',
  styleUrls: ['./footer-reference.component.scss'],
})

export class FooterReferenceComponent implements OnInit {
  
  @Input() href = '';
  @Input() email = '';
  @Input() text = '';
  faMailBulk = faMailBulk;

  constructor() {}

  ngOnInit(): void {
    
  }
}
