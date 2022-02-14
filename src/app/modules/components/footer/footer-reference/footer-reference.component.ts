import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-reference',
  templateUrl: './footer-reference.component.html',
  styleUrls: ['./footer-reference.component.scss'],
})

export class FooterReferenceComponent implements OnInit {
  
  @Input() href = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void { 
  }
}
