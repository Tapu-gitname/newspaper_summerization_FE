import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqCardComponent } from './mcq-card.component';

describe('McqCardComponent', () => {
  let component: McqCardComponent;
  let fixture: ComponentFixture<McqCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
