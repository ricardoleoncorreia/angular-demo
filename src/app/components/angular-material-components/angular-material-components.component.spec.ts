import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialComponentsComponent } from './angular-material-components.component';

describe('AngularMaterialComponentsComponent', () => {
  let component: AngularMaterialComponentsComponent;
  let fixture: ComponentFixture<AngularMaterialComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
