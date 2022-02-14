import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-href-button',
  templateUrl: './no-href-button.component.html',
  styleUrls: ['./../button/button.component.scss'],
})

export class NoHrefButtonComponent implements OnInit {
  
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
