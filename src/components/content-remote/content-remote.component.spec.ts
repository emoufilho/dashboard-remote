import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRemoteComponent } from './content-remote.component';

describe('ContentRemoteComponent', () => {
  let component: ContentRemoteComponent;
  let fixture: ComponentFixture<ContentRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentRemoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
