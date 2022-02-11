import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class MailService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  // getArticles(): Observable<any> {
  //   return this._http.get(this.url + '/posts');
  // }

  // getArticleDetail(articleId: number): Observable<any> {
  //   return this._http.get(this.url + '/posts/'+articleId);

  //  }

  //  search(searchString: string):Observable<any>{
  //    return this._http.get(this.url+'/posts/'+searchString);
  //  }

   mail(payload: any):Observable<any>{
     //let payload = JSON.stringify(payload);
     //let headers = new HttpHeaders().set('Content-Type','application-json');

     return this._http.post(this.url+'/email/testEmail', payload);

   }
}
