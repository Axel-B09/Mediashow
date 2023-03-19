import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  toggleLike(id: number, liked: boolean): Observable<any> {
    const body = { liked: liked };
    return this.http.patch<any>(`${this.apiUrl}/${id}`, body);
  }
}