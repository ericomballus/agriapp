import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayOneMaterielListPage } from './display-one-materiel-list.page';

describe('DisplayOneMaterielListPage', () => {
  let component: DisplayOneMaterielListPage;
  let fixture: ComponentFixture<DisplayOneMaterielListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOneMaterielListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayOneMaterielListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
