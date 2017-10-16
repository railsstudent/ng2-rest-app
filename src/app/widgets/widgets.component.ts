import { Component } from '@angular/core';
import { Widget, widgets } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  widgets: Array<Widget> = widgets;

  selectedWidget: any = null;

  constructor() {}
}
