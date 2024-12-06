import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss'
})
export class CardPriceComponent {
  @Input()
  gameType: string = "Digital PS4"
  
  @Input()
  gamePrice: string = 'R$ 399,90'
}
