import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddActivitieNamePage } from './add-activitie-name.page';

describe('AddActivitieNamePage', () => {
  let component: AddActivitieNamePage;
  let fixture: ComponentFixture<AddActivitieNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitieNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddActivitieNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
