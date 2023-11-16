import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @Input() animeId!: string | null;
  characters$!: Observable<any>;

  constructor(private animeService: AnimeService){}

  ngOnInit(): void {
      this.characters$ = this.animeService.getAnimeCharacters(this.animeId);
  }
}
