import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPilComponent } from './show-pil.component';

describe('ShowPilComponent', () => {
  let component: ShowPilComponent;
  let fixture: ComponentFixture<ShowPilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
