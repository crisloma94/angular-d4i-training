import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from './../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataGamesService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Horizon Hero Dawn', price: 189.95, img: '/assets/images/horizon-zero-dawn.jpg', summary: '<p>This is a summary text</p><p>This is a summary <b>paragraph</b></p>' },
      { id: 12, name: 'God of War', price: 59.95, img: '/assets/images/god-of-war.jpg', summary: '<p>This is a summary text</p><p>This is a summary <b>paragraph</b></p>' },
      { id: 13, name: 'Hogwarts Legacy', price: 49.95, img: '/assets/images/hogwarts-legacy.jpg', summary: '<p>This is a summary text</p><p>This is a summary blablablaskdfh <b>paragraph</b></p>' },
      { id: 14, name: 'Kena, bridge of spirits', price: 149.95, img: '/assets/images/kena-bridge-of-spirits.jpg', summary: '<p>This is a summary text</p><p>This is a summary <b>paragraph dsjfh</b></p>' },
      { id: 15, name: 'Goodbye volcano highs', price: 9.95, img: '/assets/images/goodbye-volcano-highs.jpg', summary: 'This is a summary text' },
      { id: 16, name: 'Bugsnax', price: 189.95, img: '/assets/images/bugsnax.jpg', summary: 'This is a summary text' },
      { id: 17, name: 'Horizon: Forbidden West', price: 179.95, img: '/assets/images/horizon-forbidden-west.jpg', summary: 'This is a summary text' }
    ];
    return {games};
  }

  // Overrides the genId method to ensure that a game always has an id.
  // If the games array is empty,
  // the method below returns the initial number (11).
  // if the games array is not empty, the method below returns the highest
  // hero id + 1.
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 11;
  }
}