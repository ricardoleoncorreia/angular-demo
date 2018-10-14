import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTablesComponent } from './angular-material-tables.component';

describe('AngularMaterialTablesComponent', () => {
  let component: AngularMaterialTablesComponent;
  let fixture: ComponentFixture<AngularMaterialTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
