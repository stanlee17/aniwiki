import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/anime.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animedetails',
  templateUrl: './animedetails.component.html',
  styleUrls: ['./animedetails.component.scss'],
})
export class AnimedetailsComponent implements OnInit {
  animes: Anime[] = [];
  animeId!: string | null;
  routeParamObs!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.animeId = param.get('id');
      this.animeService.getAnimeDetails(this.animeId).subscribe((animes) => {
        this.animes = animes;
        console.log(animes);
      });
    });
  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
}
