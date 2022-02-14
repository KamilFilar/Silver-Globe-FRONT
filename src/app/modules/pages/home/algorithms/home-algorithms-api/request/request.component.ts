import { Component, Input, OnInit } from '@angular/core';
import { faCopy, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  @Input() type = '';
  @Input() value = '';
  @Input() descritpion = '';
  faCopy = faCopy;
  copyText = '';

  constructor() { }

  getMsg(){
    if(localStorage.getItem('storageLang') === 'pl'){
      this.copyText = 'Skopiowano pomyślnie!';
    }
    if(localStorage.getItem('storageLang') === 'en'){
      this.copyText = 'Copied successfully!';
    }
    if(localStorage.getItem('storageLang') === 'du'){
      this.copyText = 'Erfolgreich kopiert!';
    }
  }

  copyRequest(target: string) {
    const selBox = document.createElement('textarea');
    selBox.value = target!;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.getMsg();
  }

  ngOnInit(): void {
    this.getMsg();
  }

}
