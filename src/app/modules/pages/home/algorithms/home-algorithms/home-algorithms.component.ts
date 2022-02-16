import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-algorithms',
  templateUrl: './home-algorithms.component.html',
  styleUrls: ['./home-algorithms.component.scss']
})

export class HomeAlgorithmsComponent implements OnInit {
  faCopy = faCopy;
  C = 'CProgram';
  Java = 'JavaProgram';
  Python = 'PythonProgram';
  CPlus = 'CPlusProgram';
  copyText = '';

  constructor() { }

  getMsg(){
    if(localStorage.getItem('storageLang') === 'pl'){
      this.copyText = 'Skopiowano pomyślnie!';
    }
    if(localStorage.getItem('storageLang') === 'en'){
      this.copyText = 'Copied successfully!';
    }
    if(localStorage.getItem('storageLang') === 'de'){
      this.copyText = 'Erfolgreich kopiert!';
    }
  }

  copyFunction(target: string) {
    const copyText = document.getElementById(target)!.textContent;
    const selBox = document.createElement('textarea');
    selBox.value = copyText!;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.getMsg();
  }

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
    this.getMsg();
  }
}

