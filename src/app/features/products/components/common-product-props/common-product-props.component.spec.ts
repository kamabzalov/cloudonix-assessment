import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductPropsComponent } from './common-product-props.component';

describe('CommonProductPropsComponent', () => {
  let component: CommonProductPropsComponent;
  let fixture: ComponentFixture<CommonProductPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonProductPropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonProductPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
