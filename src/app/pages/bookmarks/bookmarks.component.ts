import { Component } from '@angular/core';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { Observable } from 'rxjs';
import { Bookmarks } from 'src/app/anime.interface';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {
  bookmarks$!: Observable<Bookmarks[]>;

  constructor(private bookmarksService: BookmarksService) {}

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksService.getBookmarks();
  }
}
