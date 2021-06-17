import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPilComponent } from './add-edit-pil.component';

describe('AddEditPilComponent', () => {
  let component: AddEditPilComponent;
  let fixture: ComponentFixture<AddEditPilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
