import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { TopRated } from 'src/app/anime.interface';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss'],
})
export class TopratedComponent implements OnInit {
  topRated: TopRated[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getTopRated().subscribe((topRated) => {
      this.topRated = topRated;
    });
  }
}
