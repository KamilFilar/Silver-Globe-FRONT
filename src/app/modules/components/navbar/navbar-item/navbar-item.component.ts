import { Component, Input, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  faCogs = faCogs;

  @Input() href = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {
    this.showIcon();
  }

  showIcon() {
    if (this.text.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
