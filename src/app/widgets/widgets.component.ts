import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets = [];

  constructor() {

  }

  ngOnInit() {
    this.widgets = [
      'Frontend Masters',
      'Build Awesome Angular 2 Apps',
      'Challenge 3',
      'Almost there',
      'Check answers'
    ]
  }
}
