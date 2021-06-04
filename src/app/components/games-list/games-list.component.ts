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

  constructor(private gameService: GameService) {
    console.log("on constructor games list");
   }

  ngOnInit(): void {
    console.log("on init games list");
    console.log("games: ", this.getGames());
    this.getGames();
  }

  getGames(): void {
    this.gameService
      .getGames()
      .subscribe((games) => (this.games = games));
  }

}

