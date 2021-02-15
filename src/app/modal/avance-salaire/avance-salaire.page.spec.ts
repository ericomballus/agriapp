import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvanceSalairePage } from './avance-salaire.page';

describe('AvanceSalairePage', () => {
  let component: AvanceSalairePage;
  let fixture: ComponentFixture<AvanceSalairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanceSalairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvanceSalairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
