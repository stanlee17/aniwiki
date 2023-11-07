import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimeData, Anime } from '../anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  getTopRated(): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/top/anime?limit=6`)
      .pipe(map((res: AnimeData) => res.data));
  }

  getAiringNow(): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/seasons/now?limit=6`)
      .pipe(map((res: AnimeData) => res.data));
  }

  getUpcoming(): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/seasons/upcoming?limit=6`)
      .pipe(map((res: AnimeData) => res.data));
  }
}
