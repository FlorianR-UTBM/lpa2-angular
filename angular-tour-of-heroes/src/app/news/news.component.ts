import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsEntry } from '../news-entry';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  
  private news: NewsEntry[];

  ngOnInit() {
    this.newsService.load();
    this.news = this.newsService.posts;
  }

}
