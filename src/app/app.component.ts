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
  // articles: Article[] = [];  // Define articles as an array of Article
  currentIndex = 0;
  showMCQfield:boolean = false;

  articles: Article[] = [
    {
      "full_text": "The opposition BJP and its ally JD(S) in Karnataka on Saturday kicked off their seven-day \u2018Mysuru Chalo\u2019 march from Bengaluru, demanding the resignation of Chief Minister Siddaramaiah alleging his involvement in the illegal site allotment scam in the Mysuru Urban Development Authority (MUDA).\n\nBJP state president B Y Vijayendra and JD(S) Youth Wing president Nikhil Kumaraswamy started the march by blowing a bugle amidst the drum beats.\n\nThe march will culminate into a mega public meeting in Mysuru on August 10.\n\nBJP veteran B S Yediyurappa alleged that the CM is involved in a corruption case and he has to step down. \u201cIt\u2019s better for Siddaramaiah to resign on his own and step down gracefully,\u201d he said addressing the workers and leaders of both the BJP and the JD(S).\n\nAdvertisement\n\nSpeaking on the occasion, opposition leader in the Karnataka Assembly R Ashoka said the Congress has no moral right to question Governor Thaawarchand Gehlot for issuing a notice to the chief minister. \u201cYou (Siddaramaiah) have started trembling after a notice was given. One can only imagine what will happen when the permission is given by him (Governor) to prosecute the chief minister,\u201d he said.\n\nUnion Minister for Steel and Heavy Industries H D Kumaraswamy said the Congress talks about uplifting the downtrodden communities but what they did in the MUDA and Valmiki Corporation scam exposed their \u2018anti-Dalit\u2019 face.\n\nHe predicted the fall of the government in the next few months. Reacting to the agitation, the Chief Minister said the BJP is the \u2018grandfather\u2019 of corruption. \u201cIf there is any grandfather of corruption, it\u2019s the BJP. Whom do we call \u201940 per cent corruption\u2019? It\u2019s BJP only,\u201d he told reporters in Hassan.\n\nSiddaramaiah said the Karnataka Contractors\u2019 Association president D Kempanna had alleged that the previous BJP government was collecting 40 per cent commission.\n\nAdvertisement\n\nMeanwhile, speaking at the \u2018Janandolana\u2019 event, a riposte to BJP\u2019s Padayatra, at Ramanagara, Karnataka Deputy CM D K Shivakumar said corruption is the father, mother, brother, sister and relative of BJP and JD(S). The people of the state have given 135 seats for my leadership and 19 seats for Kumaraswamy\u2019s leadership.\u201d",
      "mcq": [
        {
          "answer": "Mysuru Chalo",
          "question": "What is the name of the march started by the opposition BJP and JD(S) in Karnataka?"
        },
        {
          "answer": "Resignation of Chief Minister Siddaramaiah over his alleged involvement in the illegal site allotment scam in the Mysuru Urban Development Authority (MUDA)",
          "question": "What is the main demand of the opposition BJP and JD(S) in Karnataka?"
        },
        {
          "answer": "Thaawarchand Gehlot",
          "question": "Who is the Governor of Karnataka mentioned in the article?"
        },
        {
          "answer": "Janandolana",
          "question": "What is the name of the event organized by the ruling party as a riposte to BJP's Padayatra?"
        },
        {
          "answer": "D K Shivakumar",
          "question": "Who is the Deputy Chief Minister of Karnataka mentioned in the article?"
        }
      ],
      "summary": "The opposition BJP and JD(S) in Karnataka have started a seven-day 'Mysuru Chalo' march from Bengaluru, demanding the resignation of Chief Minister Siddaramaiah over his alleged involvement in the illegal site allotment scam in the Mysuru Urban Development Authority (MUDA). The march will culminate in a mega public meeting in Mysuru on August 10. The BJP has alleged that the CM is involved in a corruption case and should step down, while the CM has countered that the BJP is the 'grandfather' of corruption.",
      "title": "BJP\u2019s \u2018Mysuru Chalo\u2019 begins, CM calls party \u2018grandpa of corruption\u2019"
    }
  ]

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    // this.service.getArticles().subscribe((data: Article[]) => {
    //   this.articles = data;
    //   console.log(this.articles)
    // });
  }

  nextArticle() {
    if (this.articles.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.articles.length;
    }
  }

  showMCQs() {
    this.showMCQfield = true;
  }

}
