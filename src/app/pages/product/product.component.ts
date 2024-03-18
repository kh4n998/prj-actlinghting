import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
