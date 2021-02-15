import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayTravauxListPage } from './display-travaux-list.page';

describe('DisplayTravauxListPage', () => {
  let component: DisplayTravauxListPage;
  let fixture: ComponentFixture<DisplayTravauxListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTravauxListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayTravauxListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
