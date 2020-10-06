import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCuttingsComponent } from './media-cuttings.component';

describe('MediaCuttingsComponent', () => {
  let component: MediaCuttingsComponent;
  let fixture: ComponentFixture<MediaCuttingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCuttingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCuttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
