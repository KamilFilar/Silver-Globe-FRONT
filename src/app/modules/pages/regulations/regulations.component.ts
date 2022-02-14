import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: [
    './regulations.component.scss', 
    './../../../../assets/styling/global/fontSize.scss',
    './../../../../assets/styling/partials/info.scss'
  ]
})

export class RegulationsComponent implements OnInit {

  politics = 'Polityka prywatności';

  fontSizeFunc(){
    let fontSize = localStorage.getItem('fontSize')!;
    return fontSize;
  }

  ngOnInit(): void {
    this.fontSizeFunc();
  }

}
