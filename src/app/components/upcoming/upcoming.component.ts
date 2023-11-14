import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent {
  animes$!: Observable<Anime[]>;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animes$ = this.animeService.getUpcoming();
  }
}
