import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { AiringComponent } from './components/airing/airing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { HomeComponent } from './pages/home/home.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
