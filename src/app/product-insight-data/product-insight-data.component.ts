import { Component } from "@angular/core";
import { ProductVariantsComponent } from "../product-variants/product-variants.component";

@Component({
  selector: "app-product-insight-data",
  standalone: true,
  imports: [ProductVariantsComponent],
  templateUrl: "./product-insight-data.component.html",
  styleUrl: "./product-insight-data.component.scss",
})
export class ProductInsightDataComponent {}
