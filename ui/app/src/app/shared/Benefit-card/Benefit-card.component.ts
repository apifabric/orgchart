import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Benefit-card.component.html',
  styleUrls: ['./Benefit-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Benefit-card]': 'true'
  }
})

export class BenefitCardComponent {


}