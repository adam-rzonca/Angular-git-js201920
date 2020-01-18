import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData("Title1"),
    new NewsData("Title2"),
    new NewsData("Title3")
  ];

  constructor() {}

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(title: string) {
    this.news.push(new NewsData(title));
    this.onChange.emit();
  }

  public removeNews(index: number) {
    this.news.splice(index, 1);
    this.onChange.emit();
  }

  public refresh() {
    this.onChange.emit();
    console.log("Service Refresh");
  }
}
