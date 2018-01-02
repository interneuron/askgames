import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Topic } from './meta';

@Injectable()
export class TopicService {
  constructor(private http: HttpClient) {
  }

  getLatest(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${environment.apiPrefix}/topic/latest`);
  }
}
