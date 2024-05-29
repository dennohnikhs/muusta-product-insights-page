import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsightDataComponent } from './product-insight-data.component';

describe('ProductInsightDataComponent', () => {
  let component: ProductInsightDataComponent;
  let fixture: ComponentFixture<ProductInsightDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInsightDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInsightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
