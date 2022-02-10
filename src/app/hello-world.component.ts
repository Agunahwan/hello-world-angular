import { Component } from "@angular/core";

@Component({
  selector:'hello-world',
  templateUrl: './hello-world.component.html',
  styles:[`h2, p {font-family:sans-serif;}`]
})

export class HelloWorldComponent{
  judul = "Hello Angular.";
  active = true;
}
