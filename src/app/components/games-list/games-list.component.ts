import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService
      .getGames()
      .subscribe((games) => (this.games = games));
  }

}

