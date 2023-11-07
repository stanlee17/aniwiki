import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/anime.interface';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getUpcoming().subscribe((animes) => {
      this.animes = animes;
    });
  }
}
