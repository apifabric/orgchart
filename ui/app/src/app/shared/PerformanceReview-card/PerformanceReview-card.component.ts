import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PerformanceReview-card.component.html',
  styleUrls: ['./PerformanceReview-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PerformanceReview-card]': 'true'
  }
})

export class PerformanceReviewCardComponent {


}