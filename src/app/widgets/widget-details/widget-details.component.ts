import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widiget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {

  @Input()
  selectedWidget: Widget;

  constructor() {

  }

  ngOnInit() {

  }
}
