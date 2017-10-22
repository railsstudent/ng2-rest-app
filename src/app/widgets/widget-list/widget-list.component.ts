import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  @Input()
  widgets: Widget[];

  @Output()
  selected: EventEmitter<Widget> = new EventEmitter();
  @Output()
  deleted: EventEmitter<Widget> = new EventEmitter();
  @Output()
  featured: EventEmitter<Widget> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }
}
