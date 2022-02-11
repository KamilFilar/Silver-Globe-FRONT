import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import components
import { CollapseButtonComponent } from './modules/components/collapse-button/collapse-button.component';
import { ButtonComponent } from './modules/components/button/button.component';
// Import pages
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { HomeWelcomeComponent } from './modules/pages/home/home-welcome/home-welcome.component';
import { HomeInfoComponent } from './modules/pages/home/home-info/home-info.component';
import { SubtitleComponent } from './modules/components/subtitle/subtitle.component';
import { IntroductionComponent } from './modules/pages/home/home-info/introduction/introduction.component';
import { HealthComponent } from './modules/pages/home/home-info/health/health.component';
import { JulianDateComponent } from './modules/pages/home/home-info/julian-date/julian-date.component';
import { BlueMoonComponent } from './modules/pages/home/home-info/blue-moon/blue-moon.component';
import { KordylweskiComponent } from './modules/pages/home/home-info/kordylweski/kordylweski.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { NavbarItemComponent } from './modules/components/navbar/navbar-item/navbar-item.component';
import { NavbarProgressbarComponent } from './modules/components/navbar/navbar-progressbar/navbar-progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeWelcomeComponent,
    HomeInfoComponent,
    PageNotFoundComponent,
    ButtonComponent,
    HomeComponent,
    CollapseButtonComponent,
    SubtitleComponent,
    IntroductionComponent,
    HealthComponent,
    JulianDateComponent,
    BlueMoonComponent,
    KordylweskiComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
