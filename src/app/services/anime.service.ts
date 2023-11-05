import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopRatedData, TopRated } from '../anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  getTopRated(): Observable<TopRated[]> {
    return this.http
      .get<TopRatedData>(`${this.baseUrl}/top/anime?limit=6`)
      .pipe(map((res: TopRatedData) => res.data));
  }
}
