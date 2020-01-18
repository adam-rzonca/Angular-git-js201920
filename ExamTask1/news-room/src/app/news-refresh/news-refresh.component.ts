import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-refresh",
  templateUrl: "./news-refresh.component.html",
  styleUrls: ["./news-refresh.component.scss"]
})
export class NewsRefreshComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  refresh() {
    console.log("Refresh Button Click");
    this.newsService.refresh();
  }
}
