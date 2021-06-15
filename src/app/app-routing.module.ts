import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LetsPlayPageComponent } from "./lets-play/lets-play.page.component";

const routes: Routes = [
  {
    path: 'lets-play',
    component: LetsPlayPageComponent
  },
  {
    path: '',
    redirectTo: 'lets-play',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
