import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectEmployePage } from './select-employe.page';

describe('SelectEmployePage', () => {
  let component: SelectEmployePage;
  let fixture: ComponentFixture<SelectEmployePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEmployePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEmployePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
