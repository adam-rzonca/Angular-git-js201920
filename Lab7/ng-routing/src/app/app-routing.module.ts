import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactangleComponent } from "./reactangle/reactangle.component";
import { CircleComponent } from "./circle/circle.component";
import { TriangleComponent } from "./triangle/triangle.component";

const routes: Routes = [
  { path: "", redirectTo: "rectangle", pathMatch: "full" },
  { path: "rectangle", component: ReactangleComponent },
  { path: "circle", component: CircleComponent },
  { path: "triangle", component: TriangleComponent },
  { path: "**", redirectTo: "circle" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
