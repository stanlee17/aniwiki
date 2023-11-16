import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { AiringComponent } from './components/airing/airing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AnimedetailsComponent } from './components/animedetails/animedetails.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopratedComponent,
    AiringComponent,
    UpcomingComponent,
    FooterComponent,
    BookmarksComponent,
    HomeComponent,
    SearchComponent,
    AnimedetailsComponent,
    SafePipe,
    CharactersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
