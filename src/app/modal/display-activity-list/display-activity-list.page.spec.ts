import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayActivityListPage } from './display-activity-list.page';

describe('DisplayActivityListPage', () => {
  let component: DisplayActivityListPage;
  let fixture: ComponentFixture<DisplayActivityListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayActivityListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayActivityListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
