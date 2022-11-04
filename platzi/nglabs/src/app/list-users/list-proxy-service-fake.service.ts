import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LIST_USERS_FAKE } from './list-users.fake.spec';

@Injectable({
  providedIn: 'root'
})
export class ListProxyServiceFakeService {
  constructor() {}
}
