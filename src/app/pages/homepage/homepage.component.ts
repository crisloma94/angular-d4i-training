import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  featuredGame: Game = {
    id: 0,
    name: '',
    price: 0,
    img: '',
    summary: '',
  };
  
  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.getFeaturedGame();
  }

  getFeaturedGame(): void {
    this.gameService.getFeaturedGame().subscribe((game) => this.featuredGame = game);
  }

}


