import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComprasComponent } from './my-compras.component';

describe('MyComprasComponent', () => {
  let component: MyComprasComponent;
  let fixture: ComponentFixture<MyComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
