import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductPropsComponent } from './custom-product-props.component';

describe('CustomProductPropsComponent', () => {
  let component: CustomProductPropsComponent;
  let fixture: ComponentFixture<CustomProductPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProductPropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProductPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
