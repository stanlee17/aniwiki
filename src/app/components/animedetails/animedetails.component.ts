import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Anime } from 'src/app/anime.interface';

@Component({
  selector: 'app-animedetails',
  templateUrl: './animedetails.component.html',
  styleUrls: ['./animedetails.component.scss'],
})
export class AnimedetailsComponent implements OnInit {
  animes$: any;
  animeId!: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.animes$ = this.activatedRoute.paramMap.pipe(
      switchMap((param) => {
        this.animeId = param.get('id');
        return this.animeService.getAnimeDetails(this.animeId);
      })
    );
  }
}
