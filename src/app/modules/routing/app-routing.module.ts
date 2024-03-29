import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PlayerStatsComponent} from '../../player-stats/player-stats.component';
import {TeamStatsComponent} from '../../team-stats/team-stats.component';
import {PageNotFoundComponent} from '../../page-not-found/page-not-found.component';
import {LandingComponent} from '../../landing/landing.component';
import {ChampionsComponent} from '../../champions/champions.component';
import {TournamentComponent} from '../../tournament/tournament.component';
import {SteamAuthComponent} from '../../steam-auth/steam-auth.component';
import {PlayerListComponent} from '../../player-list/player-list.component';
import {LeaderboardComponent} from '../../leaderboard/leaderboard.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'player/:id', component: PlayerStatsComponent },
  { path: 'team', component: TeamStatsComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'steam-auth', component: SteamAuthComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {}
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
