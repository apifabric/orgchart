import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Training-card.component.html',
  styleUrls: ['./Training-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Training-card]': 'true'
  }
})

export class TrainingCardComponent {


}