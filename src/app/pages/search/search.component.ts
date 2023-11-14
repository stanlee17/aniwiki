import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  animes$!: Observable<Anime[]>;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.animes$ = this.animeService.getSearchedAnime(f.value.search);
  }
}
