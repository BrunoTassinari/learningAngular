import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private readonly http: HttpClient) { }

  private API = "http://localhost:3004/quotes"

  create (quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.API, quote)
  } 

  getAll (): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.API)
  }

  getById (id: number): Observable<Quote> {
    return this.http.get<Quote>(`${this.API}/${id}`)
  }

  update (quote: Quote): Observable<Quote> {
    return this.http.put<Quote>(`${this.API}/${quote.id}`, quote)
  }

  delete (id: number): Observable<Quote> {
    return this.http.delete<Quote>(`${this.API}/${id}`)
  }
}
