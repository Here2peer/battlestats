import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PlayerStatsComponent} from '../../player-stats/player-stats.component';
import {TeamStatsComponent} from '../../team-stats/team-stats.component';
import {PageNotFoundComponent} from '../../page-not-found/page-not-found.component';
import {LandingComponent} from '../landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'player', component: PlayerStatsComponent },
  { path: 'team', component: TeamStatsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
