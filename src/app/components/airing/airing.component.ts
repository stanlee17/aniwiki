import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/anime.interface';

@Component({
  selector: 'app-airing',
  templateUrl: './airing.component.html',
  styleUrls: ['./airing.component.scss'],
})
export class AiringComponent {
  animes$!: Observable<Anime[]>;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animes$ = this.animeService.getAiringNow();
  }
}
