import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Office-card.component.html',
  styleUrls: ['./Office-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Office-card]': 'true'
  }
})

export class OfficeCardComponent {


}