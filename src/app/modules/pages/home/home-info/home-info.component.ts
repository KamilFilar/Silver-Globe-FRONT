import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  more = {
    href: '#MoreInformations',
    ariacontrols: '#MoreInformations'
  }
  imgSplash = './../../../../../assets/images/home/info/splashImage.gif';
  tittle = 'Słów kilka o Księżycu';

  constructor() { }

  ngOnInit(): void {
  }

}
