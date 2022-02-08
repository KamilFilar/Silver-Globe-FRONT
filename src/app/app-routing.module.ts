import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import pages
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { HomeWelcomeComponent } from './modules/pages/home/home-welcome/home-welcome.component';

const routes: Routes = [
  { path: '', component: HomeWelcomeComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
