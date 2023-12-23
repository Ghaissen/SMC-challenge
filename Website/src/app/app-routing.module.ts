// src/app/app-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'statistics', component: StatisticsComponent },
    {path:'form',component:FormComponent},
    { path: 'tips', component: TipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
