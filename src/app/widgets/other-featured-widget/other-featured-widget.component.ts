import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WidgetsService, Widget } from '../../shared/index';


@Component ({
  selector: 'app-other-featured-item',
  templateUrl: './other-featured-widget.component.html',
  styleUrls: ['./other-featured-widget.component.css']
})
class OtherFeaturedWidget implements OnInit {
  widget: Widget;

  constructor(
    private route: ActivatedRoute,
    private wigetsService: WidgetsService)
    {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.widget = this.wigetsService.loadWidget(params['id'])
    });
  }
}
