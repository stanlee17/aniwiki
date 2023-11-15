import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-animedetails',
  templateUrl: './animedetails.component.html',
  styleUrls: ['./animedetails.component.scss'],
})
export class AnimedetailsComponent implements OnInit {
  animes$!: Observable<any>;
  animeId!: string | null;
  loading!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.animes$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.animeId = params.get('id');
        return this.animeService.getAnimeDetails(this.animeId);
      })
    );
  }
}
