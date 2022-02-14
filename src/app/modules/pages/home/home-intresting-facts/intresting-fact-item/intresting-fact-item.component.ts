import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intresting-fact-item',
  templateUrl: './intresting-fact-item.component.html',
  styleUrls: ['./intresting-fact-item.component.scss']
})

export class IntrestingFactItemComponent implements OnInit {

  @Input() id!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
