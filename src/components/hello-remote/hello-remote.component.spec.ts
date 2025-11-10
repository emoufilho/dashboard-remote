import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRemoteComponent } from './hello-remote.component';

describe('HelloRemoteComponent', () => {
  let component: HelloRemoteComponent;
  let fixture: ComponentFixture<HelloRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloRemoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
