import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  register(event: any, myForm: NgForm) {
    if (myForm.valid) {
      console.log("Register", event, myForm);
    }
  }
}
