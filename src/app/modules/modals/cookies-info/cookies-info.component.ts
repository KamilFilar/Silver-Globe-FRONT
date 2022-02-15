import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cookies-info',
  templateUrl: './cookies-info.component.html',
  styleUrls: ['./cookies-info.component.scss'],
})

export class CookiesInfoComponent implements AfterViewInit {
  faCookieBite = faCookieBite;
  href = {
    name: 'Cookies',
    target: '/Cookies',
    unaccept: 'https://www.google.pl/',
  };

  @ViewChild('content') content: any;

  constructor(
    private modalService: NgbModal,
    private cookieService: CookieService
  ) {}

  isAcceptCookies() {
    this.cookieService.set('acceptedCookies', 'yes');
  }

  openModal() {
    this.modalService.open(this.content, {
      backdrop: 'static',
      keyboard: false,
      animation: true,
      size: 'xl',
      centered: true,
    });
  }

  ngAfterViewInit() {
    this.openModal();
  }
}
