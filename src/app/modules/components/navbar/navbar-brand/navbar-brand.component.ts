import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-brand',
  templateUrl: './navbar-brand.component.html',
  styleUrls: ['./navbar-brand.component.scss'],
})

export class NavbarBrandComponent implements OnInit {
  
  constructor() {}

  scrollToTop() {
    if (window.location.href != 'http://localhost:4200/') {
      location.href = 'http://localhost:4200/'
    } 
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {}
}
