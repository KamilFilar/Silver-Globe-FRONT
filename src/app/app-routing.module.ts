import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import pages
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component'
import { HomeComponent } from './modules/pages/home/home.component'
import { RegulationsComponent } from './modules/pages/regulations/regulations.component';
import { CookiesComponent } from './modules/pages/cookies/cookies.component';

const routes: Routes = [
  { path: 'Polityka', component: RegulationsComponent },
  { path: 'Cookies', component: CookiesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
