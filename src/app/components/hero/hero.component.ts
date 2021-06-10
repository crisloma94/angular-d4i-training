import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
