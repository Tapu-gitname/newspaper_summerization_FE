import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() title!: string;
  // @Input() image!: string;
  @Input() summary!: string;
  @Input() fullText!: string;

  displayDialog: boolean = false;

  showFullArticle() {
    this.displayDialog = true;
  }

  hideFullArticle() {
    this.displayDialog = false;
  }
}
