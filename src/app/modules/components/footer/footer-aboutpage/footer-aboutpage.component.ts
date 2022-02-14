import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-aboutpage',
  templateUrl: './footer-aboutpage.component.html',
  styleUrls: ['./footer-aboutpage.component.scss'],
})

export class FooterAboutpageComponent implements OnInit {
  
  img = '../../../../../assets/images/footer/aboutPage.jpg';

  constructor() {}

  showImage() {
    let display = false;
    let screenWidth = window.innerWidth;

    if (screenWidth >= 991) {
      display = true;
    }
    return display;
  }

  ngOnInit(): void {
    setInterval(this.showImage, 100);
  }

}
