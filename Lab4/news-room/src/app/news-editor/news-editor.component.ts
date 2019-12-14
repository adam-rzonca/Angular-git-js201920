import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.scss"]
})
export class NewsEditorComponent implements OnInit {
  title: string;

  @Output()
  onNewsAdd = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  addNews() {
    console.log("addNews", this.title);
    this.onNewsAdd.emit(this.title);
  }
}
