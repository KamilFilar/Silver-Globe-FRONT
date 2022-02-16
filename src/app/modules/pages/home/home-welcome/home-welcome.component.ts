import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss'],
})

export class HomeWelcomeComponent implements OnInit {
  btnHref = '#Informations';
  textPL = [
    'Na ile sposobów potrafisz opisać Księżyc?',
    'Zatrzymaj się i spójrz w niebo nocą...',
    'Ciemna strona Księżyca nie istnieje.',
    'Zawsze patrzymy na ten sam obiekt.',
  ];
  textEN = [
    'How many ways can you describe the moon?',
    'Stop and look at the sky at night ...',
    'The dark side of the moon does not exist.',
    'We are always looking at the same object.',
  ];
  textDU = [
    'Auf wie viele Arten kann man den Mond beschreiben?',
    'Halten Sie an und schauen Sie nachts in den Himmel...',
    'Die dunkle Seite des Mondes existiert nicht.',
    'Wir schauen immer auf das gleiche Objekt.',
  ];

  private speed = 100;
  private pause = 2000;

  constructor() {}

  typeWriter(i = 0, index = 1, direction = 1) {
    let texts;

    if (localStorage.getItem('storageLang') == 'pl') {
      texts = this.textPL;
    }
    else if (localStorage.getItem('storageLang') == 'en') {
      texts = this.textEN;
    }
    else if (localStorage.getItem('storageLang') == 'du') {
      texts = this.textDU;
    }
    // This if removes error "text is possibly undefined"
    else if (texts === undefined) {
      texts = this.textEN;
    }

    let target = <HTMLElement>document.querySelector('.welcome__wrapper--text');
    let displayed = texts[i].slice(0, index);
    target.textContent = displayed;

    if (displayed.length >= texts[i].length) {
      setTimeout(() => this.typeWriter(i, index - 1, -1), this.pause);
    } 
    else if (displayed.length === 0) {
      setTimeout(() => this.typeWriter((i + 1) % texts.length), this.pause);
    } 
    else {
      setTimeout(() => this.typeWriter(i, index + direction, direction), this.speed);
    }
  }

  ngOnInit(): void {
    this.typeWriter();
  }
}