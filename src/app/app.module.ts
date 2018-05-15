import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SteamComponent } from './steam/steam.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './modules/landing/landing.component';
import { ChampionsComponent } from './champions/champions.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './modules/material/material.module';
import { SteamAuthComponent } from './steam-auth/steam-auth.component';
import { TournamentComponent } from './tournament/tournament.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SteamComponent,
    TeamStatsComponent,
    PlayerStatsComponent,
    PageNotFoundComponent,
    LandingComponent,
    ChampionsComponent,
    SteamAuthComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
