import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"]
})
export class NewsListComponent implements OnInit {
  news: string[] = ["Title1", "Title2", "Title3"];

  constructor() {}

  ngOnInit() {}

  addNews(title) {
    this.news.push(title);
  }

  removeNews(index) {
    this.news.splice(index, 1);
  }
}
