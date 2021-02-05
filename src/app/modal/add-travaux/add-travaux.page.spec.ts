import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTravauxPage } from './add-travaux.page';

describe('AddTravauxPage', () => {
  let component: AddTravauxPage;
  let fixture: ComponentFixture<AddTravauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTravauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTravauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
