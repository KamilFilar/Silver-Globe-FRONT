import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    JulianDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
