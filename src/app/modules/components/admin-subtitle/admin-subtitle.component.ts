import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-subtitle',
  templateUrl: './admin-subtitle.component.html',
  styleUrls: ['./admin-subtitle.component.scss'],
})

export class AdminSubtitleComponent implements OnInit {
  
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
