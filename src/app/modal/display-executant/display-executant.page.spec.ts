import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayExecutantPage } from './display-executant.page';

describe('DisplayExecutantPage', () => {
  let component: DisplayExecutantPage;
  let fixture: ComponentFixture<DisplayExecutantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayExecutantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayExecutantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
