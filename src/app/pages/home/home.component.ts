import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: 'home.component.html',
  imports: []
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
