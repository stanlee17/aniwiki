import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmarks } from '../anime.interface';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private apiUrl = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<Bookmarks[]> {
    return this.http.get<Bookmarks[]>(this.apiUrl);
  }
}
