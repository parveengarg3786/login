import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "loginPage";
  array = [];
  submit(a, b) {
    console.log(a, b);
    this.array.push({ a, b });
    console.log(this.array);
  }
}
