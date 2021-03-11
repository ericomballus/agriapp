import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayUserMaindooeuvrePage } from './display-user-maindooeuvre.page';

describe('DisplayUserMaindooeuvrePage', () => {
  let component: DisplayUserMaindooeuvrePage;
  let fixture: ComponentFixture<DisplayUserMaindooeuvrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserMaindooeuvrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayUserMaindooeuvrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
