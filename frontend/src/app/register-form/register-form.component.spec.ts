import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>; // Test environment for component
  let de: DebugElement; // Rendered HTML element

  beforeEach(async(() => {
  // Set up testbed, which is an ng module specific for the test env
  TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents(); // Compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Boolean evaluation compare to true
  });
});
