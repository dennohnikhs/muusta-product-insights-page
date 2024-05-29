import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsightsPerformanceComponent } from './product-insights-performance.component';

describe('ProductInsightsPerformanceComponent', () => {
  let component: ProductInsightsPerformanceComponent;
  let fixture: ComponentFixture<ProductInsightsPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInsightsPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInsightsPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
