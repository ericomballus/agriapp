import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayOneActivityListPage } from './display-one-activity-list.page';

describe('DisplayOneActivityListPage', () => {
  let component: DisplayOneActivityListPage;
  let fixture: ComponentFixture<DisplayOneActivityListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOneActivityListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayOneActivityListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
