import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faFacebook = faFacebook;
  faAngleDoubleRight = faAngleDoubleRight;
  faLinkedinIn = faLinkedinIn;
  isEmail = 'yes';

  links = {
    politics: '/Polityka',
    cookies: '/Cookies',
    cookiesText: 'Cookies',
    author: '',
    email: 'FilarKamil04@gmail.com',
    github: 'https://github.com/KamilFilar',
    fb: 'https://www.facebook.com/kamilfilar',
    linkedIN: '',
  }

  constructor() {}

  ngOnInit(): void {}
}
