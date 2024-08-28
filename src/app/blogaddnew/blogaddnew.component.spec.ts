import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogaddnewComponent } from './blogaddnew.component';

describe('BlogaddnewComponent', () => {
  let component: BlogaddnewComponent;
  let fixture: ComponentFixture<BlogaddnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogaddnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogaddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
