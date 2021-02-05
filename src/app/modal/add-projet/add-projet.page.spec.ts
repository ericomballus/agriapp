import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProjetPage } from './add-projet.page';

describe('AddProjetPage', () => {
  let component: AddProjetPage;
  let fixture: ComponentFixture<AddProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
