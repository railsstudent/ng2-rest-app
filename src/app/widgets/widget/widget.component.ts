import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared/index';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input()
  widget: Widget;

  @Output()
  onWidgetClicked: EventEmitter<Widget> = new EventEmitter();

}
