import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewsService, Review } from '../../../shared';


@Component ({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  selectedReview: Review;
  title: string;

  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService)
    {}

  ngOnInit() {
    this.title = "Selected Review item";
  }
}
