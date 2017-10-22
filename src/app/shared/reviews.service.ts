import { Injectable } from '@angular/core';
import { Review, reviews } from './review.model';

@Injectable()
export class ReviewsService {
  loadReviews() : Review[] {
    return reviews;
  }

  getReview(id) : Review {
    return reviews.find(review => review.id === +id);
  }
}
