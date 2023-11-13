import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AnimedetailsComponent } from './components/animedetails/animedetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'search', component: SearchComponent },
  { path: 'anime/:id', component: AnimedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
