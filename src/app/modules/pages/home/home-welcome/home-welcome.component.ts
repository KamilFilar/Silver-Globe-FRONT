import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss']
})
export class HomeWelcomeComponent implements OnInit {

  btn = {
    href: "#Informations",
    name: "Eksploruj"
  }

  textPL = [
    'Na ile sposobów potrafisz opisać Księżyc?',
    'Zatrzymaj się i spójrz w niebo nocą...',
    'Ciemna strona Księżyca nie istnieje.',
    'Zawsze patrzymy na ten sam obiekt.'
  ];

  textEN = [
    'How many ways can you describe the moon?',
    'Stop and look at the sky at night...',
    'The dark side of the moon does not exist.',
    'We are always looking at the same object.'
  ];

  private speed = 90;
  private pause = 2500;

  constructor() { }

  typeWriter(i = 0, index = 1, direction = 1) {
    let texts;
    const target = <HTMLElement>document.querySelector(".wrapperWelcome--text");
    
    // Check localStorage
    if (localStorage.getItem('lang') == 'pl') {
      texts = this.textPL;
    }
    if (localStorage.getItem('lang') == 'en') {
      texts = this.textEN;
    }
    if (texts === undefined) {
      texts = this.textEN;
    }

    // Set text to display
    let displayed = texts[i].slice(0, index);
    target.textContent = displayed;

    // Display text
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
