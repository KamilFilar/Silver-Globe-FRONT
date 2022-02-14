import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  faMinus,
  faPlus,
  faFont,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-panel-settings',
  templateUrl: './user-panel-settings.component.html',
  styleUrls: ['./user-panel-settings.component.scss'],
})

export class UserPanelSettingsComponent implements OnInit {
 
  @Output() changeLangEvent = new EventEmitter();
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
    if (localStorage.getItem('storageLang') === 'pl') {
      this.selectLang = 'pl';
      this.translate.use(this.selectLang);
      return;
    }
    if (localStorage.getItem('storageLang') === 'en') {
      this.selectLang = 'en';
      this.translate.use(this.selectLang);
      return;
    }
    if (localStorage.getItem('storageLang') === 'du') {
      this.selectLang = 'du';
      this.translate.use(this.selectLang);
      return;
    }
  }

  // Change font size in app
  setFontSizePlus() {
    if (localStorage.getItem('fontSize') == 'li') {
      localStorage.setItem('fontSize', 'sm');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'sm') {
      localStorage.setItem('fontSize', 'md');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'md') {
      localStorage.setItem('fontSize', 'bg');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'bg') {
      localStorage.setItem('fontSize', 'hg');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'hg') {
      localStorage.setItem('fontSize', 'li');
      this.getFontSize();
      return;
    }
  }

  setFontSizeMinus() {
    if (localStorage.getItem('fontSize') == 'hg') {
      localStorage.setItem('fontSize', 'bg');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'bg') {
      localStorage.setItem('fontSize', 'md');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'md') {
      localStorage.setItem('fontSize', 'sm');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'sm') {
      localStorage.setItem('fontSize', 'li');
      this.getFontSize();
      return;
    }
    if (localStorage.getItem('fontSize') == 'li') {
      this.getFontSize();
      return;
    }
  }

  getFontSize() {
    if (localStorage.getItem('fontSize') == 'hg') {
      this.displayFontSize = 21;
      return;
    }
    if (localStorage.getItem('fontSize') == 'bg') {
      this.displayFontSize = 20;
      return;
    }
    if (localStorage.getItem('fontSize') == 'md') {
      this.displayFontSize = 19;
      return;
    }
    if (localStorage.getItem('fontSize') == 'sm') {
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
    this.getFontSize();
  }
  
}
