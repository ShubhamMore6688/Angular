import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShoesListComponent } from './components/home/shoes-list/shoes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { FilterShoesComponent } from './components/home/filter-shoes/filter-shoes.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoesListComponent,
    NavbarComponent,
    MainComponent,
    FilterShoesComponent,
    CarouselComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
