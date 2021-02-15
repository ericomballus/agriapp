import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayMaterielListPage } from './display-materiel-list.page';

describe('DisplayMaterielListPage', () => {
  let component: DisplayMaterielListPage;
  let fixture: ComponentFixture<DisplayMaterielListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMaterielListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayMaterielListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
