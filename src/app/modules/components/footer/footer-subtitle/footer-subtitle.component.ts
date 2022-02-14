import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-subtitle',
  templateUrl: './footer-subtitle.component.html',
  styleUrls: ['./footer-subtitle.component.scss'],
})

export class FooterSubtitleComponent implements OnInit {
  
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
