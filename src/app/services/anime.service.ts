import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, auditTime } from 'rxjs/operators';
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
      .pipe(map((res: AnimeData) => res.data))
      .pipe(auditTime(3000));
  }

  getAiringNow(): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/seasons/now?limit=6`)
      .pipe(map((res: AnimeData) => res.data))
      .pipe(auditTime(3000));
  }

  getUpcoming(): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/seasons/upcoming?limit=6`)
      .pipe(map((res: AnimeData) => res.data))
      .pipe(auditTime(3000));
  }

  getAnimeDetails(id: string | null): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/anime/${id}`)
      .pipe(map((res: AnimeData) => res.data));
  }

  getSearchedAnime(query: string): Observable<Anime[]> {
    return this.http
      .get<AnimeData>(`${this.baseUrl}/anime?q=${query}`)
      .pipe(map((res: AnimeData) => res.data));
  }
}
