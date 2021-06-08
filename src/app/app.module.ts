import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataGamesService } from './../app/services/in-memory-games-data.service';
import { ButtonComponent } from './components/button/button.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeroComponent } from './components/hero/hero.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameCardComponent,
    ButtonComponent,
    HomepageComponent,
    HeroComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataGamesService, {
      dataEncapsulation: false,
    }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
