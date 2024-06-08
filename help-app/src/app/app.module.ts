import { HttpClientModule, HttpHandler } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ApiService } from "./api.service";
import { AppRoutingModule } from "./app-routing.module";
import { HelpListComponent } from "./help-list/help-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { FilterPanelComponent } from "./filter-panel/filter-panel.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./account/login/login.component";
import { RegisterComponent } from "./account/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    HelpListComponent,
    HomePageComponent,
    HeaderComponent,
    FilterPanelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
]
})

export class AppModule {


}
