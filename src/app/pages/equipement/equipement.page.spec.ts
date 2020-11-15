import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipementPage } from './equipement.page';

describe('EquipementPage', () => {
  let component: EquipementPage;
  let fixture: ComponentFixture<EquipementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
