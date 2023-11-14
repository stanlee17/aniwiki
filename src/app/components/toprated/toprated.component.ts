import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss'],
})
export class TopratedComponent {
  animes$!: Observable<Anime[]>;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animes$ = this.animeService.getTopRated();
  }
}
