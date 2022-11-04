import { HttpClient } from '@angular/common/http';
import { TemplateLiteral } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

constructor(private readonly http : HttpClient) { }

  search(term:string):Observable<any>{
    const params = {
      action: 'languagesearch',
      format : 'json',
      search: term,
      typos: 1,
      formatversion: 'latest'

    }
    //https://www.mediawiki.org/w/api.php?action=languagesearch&format=json&search=angular&typos=1&formatversion=latest
    return this.http.get<any>(environment.api, {params} )
  }
}
