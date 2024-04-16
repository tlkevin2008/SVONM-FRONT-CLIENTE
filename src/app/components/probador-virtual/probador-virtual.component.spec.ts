import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbadorVirtualComponent } from './probador-virtual.component';

describe('ProbadorVirtualComponent', () => {
  let component: ProbadorVirtualComponent;
  let fixture: ComponentFixture<ProbadorVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbadorVirtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProbadorVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
