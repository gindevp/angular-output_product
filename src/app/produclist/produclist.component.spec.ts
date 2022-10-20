import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduclistComponent } from './produclist.component';

describe('ProduclistComponent', () => {
  let component: ProduclistComponent;
  let fixture: ComponentFixture<ProduclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduclistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
