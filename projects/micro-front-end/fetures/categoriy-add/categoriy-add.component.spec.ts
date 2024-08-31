import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriyAddComponent } from './categoriy-add.component';

describe('CategoriyAddComponent', () => {
  let component: CategoriyAddComponent;
  let fixture: ComponentFixture<CategoriyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriyAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
