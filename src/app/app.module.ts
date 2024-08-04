import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleCardComponent } from './article-card/article-card.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
