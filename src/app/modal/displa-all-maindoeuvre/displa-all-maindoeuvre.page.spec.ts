import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplaAllMaindoeuvrePage } from './displa-all-maindoeuvre.page';

describe('DisplaAllMaindoeuvrePage', () => {
  let component: DisplaAllMaindoeuvrePage;
  let fixture: ComponentFixture<DisplaAllMaindoeuvrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaAllMaindoeuvrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaAllMaindoeuvrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
