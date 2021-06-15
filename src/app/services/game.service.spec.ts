import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { GameService } from './game.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameService', () => {
  let gameService: GameService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule], 
    providers: [{provide: GameService}]
  }));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});