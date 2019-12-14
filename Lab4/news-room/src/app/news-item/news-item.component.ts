import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent implements OnInit {
  @Input()
  public title: string;

  @Output()
  onRemove = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  remove() {
    this.onRemove.emit();
  }
}
