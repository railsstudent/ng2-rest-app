import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WidgetsService, Widget } from '../../shared/index';


@Component ({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewItems = [];
  title: string;

  constructor(private route: ActivatedRoute)
    {}

  ngOnInit() {
    this.title = "Review for me!!!";
    this.reviewItems = [
      'a',
      'b',
      'c',
      'd'
    ]
  }
}
