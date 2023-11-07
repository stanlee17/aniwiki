import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/anime.interface';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss'],
})
export class TopratedComponent {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getTopRated().subscribe((animes) => {
      this.animes = animes;
    });
  }
}
