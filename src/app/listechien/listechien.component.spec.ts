import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechienComponent } from './listechien.component';

describe('ListechienComponent', () => {
  let component: ListechienComponent;
  let fixture: ComponentFixture<ListechienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListechienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListechienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
