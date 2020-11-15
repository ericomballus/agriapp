import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddActivieModalPage } from './add-activie-modal.page';

describe('AddActivieModalPage', () => {
  let component: AddActivieModalPage;
  let fixture: ComponentFixture<AddActivieModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivieModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddActivieModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
