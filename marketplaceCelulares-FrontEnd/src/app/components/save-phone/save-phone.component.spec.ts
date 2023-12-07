import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePhoneComponent } from './save-phone.component';

describe('SavePhoneComponent', () => {
  let component: SavePhoneComponent;
  let fixture: ComponentFixture<SavePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
