import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable, Observer, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { giph } from 'src/app/shared/models/types/giph.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiUrl = 'http://api.giphy.com/v1/gifs/search?q='
  private _apiKey = 'pA9gAZ9WI2x4Xwi4EcH8cDA9Li6iOWwl'
  myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  constructor(private http: HttpClient
  ) {  }

  // public getGiphys() {
  //   return this.giphs
  // }

  public search(search: string) {
    this.http.get(this._apiUrl + search + '&api_key=' + this._apiKey + '&limit=2')
    .pipe(
      map(data => data as giph)
    )
    .subscribe(
      (data) => this.myData.next(data.data) 
    );
  }

  getMyData() {
    return this.myData.asObservable();
  }

}
