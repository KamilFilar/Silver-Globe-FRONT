import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-admission',
  templateUrl: './info-admission.component.html',
  styleUrls: ['./info-admission.component.scss', './../../../../../../assets/styling/global/fontSize.scss']
})

export class InfoAdmissionComponent implements OnInit {

  constructor() { }
  
  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
