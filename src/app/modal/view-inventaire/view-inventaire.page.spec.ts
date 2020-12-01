import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewInventairePage } from './view-inventaire.page';

describe('ViewInventairePage', () => {
  let component: ViewInventairePage;
  let fixture: ComponentFixture<ViewInventairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInventairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInventairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
