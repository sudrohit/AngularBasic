import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookDetails } from '../modal/bookDetails';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  /** URL to get data from the rest sevice. */
  private getDatafromURL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) { }

  /**
   * Create method to get data from backend service.
   */
  getInfoByDate() : Observable<bookDetails[]> {
    console.log('Print service data');
    console.log(this.http.get<any[]>(this.getDatafromURL));
    return this.http.get<any[]>(this.getDatafromURL);
  }

}
