import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSource = new BehaviorSubject<string>('');
  currentSearch = this.searchSource.asObservable();

  constructor() { }
}
