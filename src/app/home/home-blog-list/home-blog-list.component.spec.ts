import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogListComponent } from './home-blog-list.component';

describe('HomeBlogListComponent', () => {
  let component: HomeBlogListComponent;
  let fixture: ComponentFixture<HomeBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
