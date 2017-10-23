import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widget, widgets } from './widget.model';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/widgets/'
const IMG_URL = 'assets/img/'
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {

  constructor(private http: Http) {}

  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  loadWidget(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json())
      .map(widget => Object.assign({}, widget, {img: `${BASE_URL}${widget.img}`}));
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json());
  }

  updateWidget(widget: Widget) {
    delete widget.img;
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(res => res.json())
      .map(widget => Object.assign({}, widget, {img: `${IMG_URL}${widget.img}`}));

  }

  deleteWidget(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .map(res => res.json());
  }
}
