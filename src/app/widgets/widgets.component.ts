import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.widgets = this.widgetsService.loadWidgets();
    this.route.params
      .filter(params => params.id)
      .map(params => parseInt(params.id))
      .subscribe(id =>
          this.selectedWidget = this.widgets.find(w => w.id === id)
      );

    this.route.queryParams
      .filter(params => params.name)
      .map(params => params.name)
      .subscribe(name =>
          this.selectedWidget = this.widgets.find(w => w.name === name)
      );
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    const responseWidget = this.widgetsService.saveWidget(widget);

    if (widget.id) {
      this.replaceWidget(responseWidget);
    } else {
      this.pushWidget(responseWidget);
    }

    // Generally, we would want to wait for the result of `widgetsService.saveWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  replaceWidget(widget: Widget) {
    this.widgets = this.widgets.map(mapWidget => {
      return mapWidget.id === widget.id ? widget : mapWidget;
    });
  }

  pushWidget(widget: Widget) {
    this.widgets.push(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget);
    this.widgets.splice(this.widgets.indexOf(widget), 1);

    // Generally, we would want to wait for the result of `widgetsService.deleteWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  queryByName(name) {
    this.router.navigate(['widgets'], { queryParams: { name: name }});
  }

  routeWidget(id) {
    this.router.navigate(['widgets', id]);
  }
}
