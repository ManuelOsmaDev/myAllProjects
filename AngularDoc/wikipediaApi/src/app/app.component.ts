import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { SearchService } from './pages/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private searchService: SearchService){
    this.searchService.search('romeo')
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe()
  }
}
