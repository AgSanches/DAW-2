import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFlickComponent } from './photo-flick.component';

describe('PhotoFlickComponent', () => {
  let component: PhotoFlickComponent;
  let fixture: ComponentFixture<PhotoFlickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFlickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
