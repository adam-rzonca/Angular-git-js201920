import { Component, OnInit } from "@angular/core";
import { NewsData } from "../news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  news: NewsData[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.onChange.subscribe(() => {
      this.loadNews();
    });

    this.loadNews();
  }

  // public loadNews() {
  //   this.news = [];
  //   setTimeout(() => {
  //     this.news = this.newsService.getNewsList();
  //   }, 2000);
  // }

  public loadNews() {
    this.news = this.newsService.getNewsList();
  }
}
