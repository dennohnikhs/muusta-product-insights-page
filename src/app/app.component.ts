import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { ProductPostTopComponent } from "./product-post-top/product-post-top.component";
import { ProductInsightDataComponent } from "./product-insight-data/product-insight-data.component";
import { ProductInsightsPerformanceComponent } from "./product-insights-performance/product-insights-performance.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    ProductPostTopComponent,
    ProductInsightDataComponent,
    ProductInsightsPerformanceComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
