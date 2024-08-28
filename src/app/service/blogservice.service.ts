import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  apiurl = 'https://localhost:7000/api/JSONBlogMngmt'//'https://localhost:7000/api/BlogMngmt'; //'https://localhost:7000/api/JSONBlogMngmt/GetBlogMngmt';
  constructor(private http: HttpClient) { }
  LoadBlogData(): Observable<any> {
    return this.http.get(this.apiurl + '/GetBlogMngmt');
  }
  SaveBlogData(bloddata: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    const body = JSON.stringify(bloddata);
    return this.http.post<any>(this.apiurl + '/CreateBlogMngmt', body, { headers: reqHeader });
  }
  LoadBlogDatabycode(id: any) {
    console.log('id')
    return this.http.get(this.apiurl + '/' + id);
  }
  UpdateBlogData(bloddata: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    const body = JSON.stringify(bloddata);
    return this.http.put<any>(this.apiurl, body, { headers: reqHeader });
  }
  RemoveBlogData(id: any) {
    console.log("id --> " + id);
    return this.http.delete(this.apiurl + '/' + id);
  }
}
