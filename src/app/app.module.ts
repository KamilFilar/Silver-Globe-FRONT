import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
// Multilang
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Import API 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MoonService } from './config/services/moon.service';
import { EmailService } from './config/services/email.service';
import { NewsletterService } from './config/services/newsletter.service';
// Import components
import { SubtitleComponent } from './modules/components/subtitle/subtitle.component';
import { ButtonComponent } from './modules/components/button/button.component';
import { CollapseButtonComponent } from './modules/components/collapse-button/collapse-button.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { NavbarItemComponent } from './modules/components/navbar/navbar-item/navbar-item.component';
import { NavbarBrandComponent } from './modules/components/navbar/navbar-brand/navbar-brand.component';
import { NavbarProgressbarComponent } from './modules/components/navbar/navbar-progressbar/navbar-progressbar.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FooterSubtitleComponent } from './modules/components/footer/footer-subtitle/footer-subtitle.component';
import { FooterReferenceComponent } from './modules/components/footer/footer-reference/footer-reference.component';
import { FooterNewsletterComponent } from './modules/components/footer/footer-newsletter/footer-newsletter.component';
import { FooterCopyrightComponent } from './modules/components/footer/footer-copyright/footer-copyright.component';
import { FooterQuotationComponent } from './modules/components/footer/footer-quotation/footer-quotation.component';
import { CopyCodeBtnComponent } from './modules/pages/home/algorithms/home-algorithms/copy-code-btn/copy-code-btn.component';
import { NoHrefButtonComponent } from './modules/components/no-href-button/no-href-button.component';
// Import modals
import { CookiesInfoComponent } from './modules/modals/cookies-info/cookies-info.component';
import { UserPanelComponent } from './modules/modals/user-panel/user-panel.component';

import { UserSendEmailComponent } from './modules/modals/alerts/user/user-send-email/user-send-email.component';
import { UserNewsletterComponent } from './modules/modals/alerts/user/user-newsletter/user-newsletter.component';
import { AlertCopyComponent } from './modules/modals/alerts/alert-copy/alert-copy.component';
// Import pages
import { RegulationsComponent } from './modules/pages/regulations/regulations.component';
import { CookiesComponent } from './modules/pages/cookies/cookies.component';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
// Import home
import { HomeComponent } from './modules/pages/home/home.component';
import { HomeWelcomeComponent } from './modules/pages/home/home-welcome/home-welcome.component';
import { HomeInfoComponent } from './modules/pages/home/home-info/home-info.component';
import { HomeStateComponent } from './modules/pages/home/home-state/home-state.component';
import { HomeStateDataComponent } from './modules/pages/home/home-state/home-state-data/home-state-data.component';
import { HomeStateMoreComponent } from './modules/pages/home/home-state/home-state-more/home-state-more.component';
import { HomeAlgorithmsComponent } from './modules/pages/home/algorithms/home-algorithms/home-algorithms.component';
import { HomeAlgorithmsInfoComponent } from './modules/pages/home/algorithms/home-algorithms-info/home-algorithms-info.component';
import { HomeContactComponent } from './modules/pages/home/home-contact/home-contact.component';
import { HomeAlgorithmsApiComponent } from './modules/pages/home/algorithms/home-algorithms-api/home-algorithms-api.component';
import { RequestComponent } from './modules/pages/home/algorithms/home-algorithms-api/request/request.component';
import { RequestInfoComponent } from './modules/pages/home/algorithms/home-algorithms-api/request-info/request-info.component';
import { HomeJulianDateComponent } from './modules/pages/home/home-julian-date/home-julian-date.component';
import { HomeIntrestingFactsComponent } from './modules/pages/home/home-intresting-facts/home-intresting-facts.component';
import { IntrestingFactItemComponent } from './modules/pages/home/home-intresting-facts/intresting-fact-item/intresting-fact-item.component';
// Import programs
import { ProgramCComponent } from './modules/pages/home/algorithms/home-algorithms/programs/program-c/program-c.component';
import { ProgramJavaComponent } from './modules/pages/home/algorithms/home-algorithms/programs/program-java/program-java.component';
import { ProgramPythonComponent } from './modules/pages/home/algorithms/home-algorithms/programs/program-python/program-python.component';
import { ProgramCplusComponent } from './modules/pages/home/algorithms/home-algorithms/programs/program-cplus/program-cplus.component';
// Import info
import { IntroductionComponent } from './modules/pages/home/home-info/introduction/introduction.component';
import { BlueMoonComponent } from './modules/pages/home/home-info/blue-moon/blue-moon.component';
import { KordylweskiComponent } from './modules/pages/home/home-info/kordylweski/kordylweski.component';
import { JulianDateComponent } from './modules/pages/home/home-info/julian-date/julian-date.component';
import { HealthComponent } from './modules/pages/home/home-info/health/health.component';

// Import materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCalendar } from '@angular/material/datepicker';
// Import charts
import { ChartsModule } from 'ng2-charts';
import { HomeAlgorithmsWeightComponent } from './modules/pages/home/algorithms/home-algorithms-weight/home-algorithms-weight.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SubtitleComponent,
    ButtonComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    FooterComponent,
    FooterSubtitleComponent,
    FooterReferenceComponent,
    FooterNewsletterComponent,
    FooterCopyrightComponent,
    FooterQuotationComponent,
    NavbarProgressbarComponent,
    HomeComponent,
    HomeWelcomeComponent,
    HomeStateComponent,
    HomeStateDataComponent,
    CollapseButtonComponent,
    HomeStateMoreComponent,
    RegulationsComponent,
    CookiesComponent,
    HomeAlgorithmsComponent,
    CopyCodeBtnComponent,
    ProgramCComponent,
    ProgramJavaComponent,
    ProgramPythonComponent,
    ProgramCplusComponent,
    HomeAlgorithmsInfoComponent,
    HomeInfoComponent,
    CookiesInfoComponent,
    UserPanelComponent,
    HomeAlgorithmsApiComponent,
    RequestComponent,
    RequestInfoComponent,
    HomeJulianDateComponent,
    HomeIntrestingFactsComponent,
    HomeContactComponent,
    NoHrefButtonComponent,
    UserSendEmailComponent,
    UserNewsletterComponent,
    IntrestingFactItemComponent,
    AlertCopyComponent,
    HomeAlgorithmsWeightComponent,

    // Home info
    IntroductionComponent,
    BlueMoonComponent,
    KordylweskiComponent,
    JulianDateComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSidenavModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatCalendar,
    CookieService,
    EmailService,
    MoonService,
    NewsletterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}