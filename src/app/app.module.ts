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

@NgModule({
  declarations: [
    AppComponent,
    HomeWelcomeComponent,
    HomeInfoComponent,
    PageNotFoundComponent,
    ButtonComponent,
    HomeComponent,
    CollapseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
