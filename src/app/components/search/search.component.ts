import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable, BehaviorSubject, of, fromEvent } from 'rxjs';
import { giph } from 'src/app/shared/models/types/giph.type';
import { map, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public giphs: any[]
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  public isSearching: boolean

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      tap(() => this.isSearching = true),
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      ,filter(res => res.length > 1) // <-- Optional
      // Time in milliseconds between key events
      ,debounceTime(200)        
      // If previous query is diffent from current   
      ,distinctUntilChanged()
      // subscription for response
      ).subscribe((search) => {
          this.search(search)
      })

    this.apiService.getMyData().subscribe(
      (data) => { 
        this.isSearching = false
        this.giphs = data
      });
  }

  search(search) {
    this.giphs = [];
    if (search != '' || search.trim() != '') {
      this.apiService.search(search)
    }
  }



}
