import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";
import newsInitList from "./news.json";
import { ThrowStmt } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  onChange = new EventEmitter();

  private news: NewsData[] = newsInitList.map(
    news => new NewsData(news.title, news.imageUrl, news.content, news.votes)
  );

  constructor() {}

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(
    title: string,
    imageUrl: string,
    content: string,
    votes: number
  ) {
    this.news.push(new NewsData(title, imageUrl, content, votes));
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

  public vote(index: number) {
    console.log(index);
    console.log(this.news);
    this.news[index].votes++;
    this.onChange.emit();
  }
}
