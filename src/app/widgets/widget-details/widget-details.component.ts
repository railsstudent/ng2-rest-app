import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widiget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {

  @Input()
  selectedWidget: Widget;

  @Output()
  cancel: EventEmitter<Widget> = new EventEmitter();

  @Output()
  save: EventEmitter<Widget> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }
}
