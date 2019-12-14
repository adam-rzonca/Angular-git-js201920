import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsItemComponent } from "./news-item/news-item.component";
import { NewsEditorComponent } from "./news-editor/news-editor.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsEditorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
