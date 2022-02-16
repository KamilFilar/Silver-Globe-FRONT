import { Component, Input, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-copy-code-btn',
  templateUrl: './copy-code-btn.component.html',
  styleUrls: ['./copy-code-btn.component.scss']
})

export class CopyCodeBtnComponent implements OnInit {
  @Input() parameter =  '';
  faCopy = faCopy;
  
  constructor() { }

  ngOnInit(): void {
  }

}
