import { Component, OnInit } from '@angular/core';
import { ReviewsService, Review } from '../../shared';


@Component ({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewItems = [];
  title: string;

  constructor(private reviewsService: ReviewsService)
    {}

  ngOnInit() {
    this.title = "Review for me!!!";
    this.reviewItems = this.reviewsService.loadReviews();
  }
}
