import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayeMaindoeuvrePage } from './paye-maindoeuvre.page';

describe('PayeMaindoeuvrePage', () => {
  let component: PayeMaindoeuvrePage;
  let fixture: ComponentFixture<PayeMaindoeuvrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeMaindoeuvrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayeMaindoeuvrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
