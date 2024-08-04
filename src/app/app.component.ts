import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'news-app';
  articles: Article[] = [];  // Define articles as an array of Article
  currentIndex = 0;

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
      console.log(this.articles)
    });
  }

  nextArticle() {
    if (this.articles.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.articles.length;
    }
  }

}
