import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = 'localhost:8080'

  constructor(
    private http: HttpClient,
  ) {}

 login(loginRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }

  getAllData(param?: any): Observable<any> {
    return this.http.get('../assets/institutionsData.json');
  }

  getLunch(): void {
    let lunchList: any = [];
    this.http.get('../assets/institutionsData.json').subscribe((data) => {
      lunchList = data;
      lunchList = lunchList['lunch']
      console.log(lunchList)
    })
  }

  getHelpPlacesData(helpListName: string): any {
    let helpData: any = [];
    this.http.get('assets/institutionsData.json').subscribe((data) => {
      helpData = data;
      helpData = helpData[helpListName]
    })
    console.log(helpData)
    return helpData;
  }
}
