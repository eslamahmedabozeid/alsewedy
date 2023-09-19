import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponentComponent } from './task-component.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('TaskComponentComponent', () => {
  let component: TaskComponentComponent;
  let fixture: ComponentFixture<TaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule],
      declarations: [TaskComponentComponent],

    });
    fixture = TestBed.createComponent(TaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
