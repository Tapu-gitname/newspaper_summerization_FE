import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Import the environment
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.apiUrl;  // Use the environment variable

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {  // Specify that it returns an Observable of Article array
    return this.http.get<Article[]>(`${this.apiUrl}api/articles`);  // Concatenate with your endpoint
  }

}
