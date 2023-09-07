import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPgeComponent } from './members-pge.component';

describe('MembersPgeComponent', () => {
  let component: MembersPgeComponent;
  let fixture: ComponentFixture<MembersPgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersPgeComponent]
    });
    fixture = TestBed.createComponent(MembersPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
