import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../interfaces/game';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

  buyGameOnClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    console.log("clicked buy on: ", this.game.name);
  }

}
