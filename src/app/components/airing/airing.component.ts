import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/anime.interface';

@Component({
  selector: 'app-airing',
  templateUrl: './airing.component.html',
  styleUrls: ['./airing.component.scss'],
})
export class AiringComponent {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService
      .getAiringNow()
      .subscribe((animes) => (this.animes = animes));
  }
}
