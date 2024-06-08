import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HelpListComponent } from './help-list/help-list.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddPlaceComponent } from './account/add-place/add-place.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'list', component: HelpListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-coordinator', component: RegisterComponent },
  { path: 'add-place', component: AddPlaceComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

