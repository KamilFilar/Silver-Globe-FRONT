import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  faMinus,
  faPlus,
  faFont,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})

export class UserPanelComponent implements OnInit {
  @Output() changeLangEvent = new EventEmitter();
  faTimes = faTimes;
  faFont = faFont;
  faMinus = faMinus;
  faPlus = faPlus;
  faAdjust = faAdjust;
  ENFlag = '../../../../../assets/images/materials/flags/EN-USA-icon.png';
  PLFlag = '../../../../../assets/images/materials/flags/PL-icon.png';
  DUFlag = '../../../../../assets/images/materials/flags/DU-icon.png';
  displayFontSize!: number;
  selectLang!: string;
  storageLang!: string;

  constructor(public translate: TranslateService) {}

  // Change lang in app
  radioChangeLang(e: any) {
    this.translate.use(this.selectLang);
    localStorage.setItem('storageLang', this.selectLang);
  }

  checkStorageLang() {
    let lang = localStorage.getItem('storageLang');

    if(lang == 'pl' || lang == 'en' || lang == 'de'){
      this.selectLang = lang;
      this.translate.use(this.selectLang);
    }
    else {
      this.selectLang = 'pl';
      this.translate.use(this.selectLang);
    }
  }

  checkStorageFontSize() {
    let fontSize = localStorage.getItem('fontSize');
    if (fontSize == 'li') {
      this.displayFontSize = 17;
    }
    else if (fontSize == 'sm') {
      this.displayFontSize = 18;
    }
    else if (fontSize == 'md') {
      this.displayFontSize = 19;
    }
    else if (fontSize == 'bg') {
      this.displayFontSize = 20;
    }
    else if (fontSize == 'hg') {
      this.displayFontSize = 21;
    }
  }

  // Increase font size
  setFontSizePlus() {
    if (localStorage.getItem('fontSize') == 'li') {
      localStorage.setItem('fontSize', 'sm');
      this.displayFontSize = 18;
      return;
    }
    if (localStorage.getItem('fontSize') == 'sm') {
      localStorage.setItem('fontSize', 'md');
      this.displayFontSize = 19;
      return;
    }
    if (localStorage.getItem('fontSize') == 'md') {
      localStorage.setItem('fontSize', 'bg');
      this.displayFontSize = 20;
      return;
    }
    if (localStorage.getItem('fontSize') == 'bg') {
      localStorage.setItem('fontSize', 'hg');
      this.displayFontSize = 21;
      return;
    }
    if (localStorage.getItem('fontSize') == 'hg') {
      localStorage.setItem('fontSize', 'li');
      this.displayFontSize = 17;
      return;
    }
  }

  // Reduce font size
  setFontSizeMinus() {
    if (localStorage.getItem('fontSize') == 'hg') {
      localStorage.setItem('fontSize', 'bg');
      this.displayFontSize = 21;
      return;
    }
    if (localStorage.getItem('fontSize') == 'bg') {
      localStorage.setItem('fontSize', 'md');
      this.displayFontSize = 20;
      return;
    }
    if (localStorage.getItem('fontSize') == 'md') {
      localStorage.setItem('fontSize', 'sm');
      this.displayFontSize = 19;
      return;
    }
    if (localStorage.getItem('fontSize') == 'sm') {
      localStorage.setItem('fontSize', 'li');
      this.displayFontSize = 18;
      return;
    }
    if (localStorage.getItem('fontSize') == 'li') {
      this.displayFontSize = 17;
      return;
    }
  }

  ngOnInit(): void {
    this.checkStorageLang();
    this.checkStorageFontSize();
  }
}