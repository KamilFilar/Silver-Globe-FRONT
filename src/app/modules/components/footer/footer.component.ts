import { Component, OnInit } from '@angular/core';
import {
  faMailBulk,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  faMailBulk = faMailBulk;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faAngleDoubleRight = faAngleDoubleRight;
  isEmail = 'yes';

  politics = {
    link: '/Regulamin',
  };
  cookies = {
    link: '/Cookies',
    text: 'Cookies',
  };
  author = {
    href: '',
  };
  contact = {
    text: 'FilarKamil04@gmail.com',
  };
  github = 'https://github.com/KamilFilar';
  fb = 'https://www.facebook.com/kamilfilar';

  constructor() {}

  copyEmail(val: string) {
    const selBox = document.createElement('textarea');
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  
  ngOnInit(): void {}

}
