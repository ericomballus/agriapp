import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalairePage } from './salaire.page';

describe('SalairePage', () => {
  let component: SalairePage;
  let fixture: ComponentFixture<SalairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
