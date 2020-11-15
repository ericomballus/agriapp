import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatedActivitiePage } from './created-activitie.page';

describe('CreatedActivitiePage', () => {
  let component: CreatedActivitiePage;
  let fixture: ComponentFixture<CreatedActivitiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedActivitiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedActivitiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
