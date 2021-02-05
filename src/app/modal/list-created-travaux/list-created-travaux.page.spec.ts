import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCreatedTravauxPage } from './list-created-travaux.page';

describe('ListCreatedTravauxPage', () => {
  let component: ListCreatedTravauxPage;
  let fixture: ComponentFixture<ListCreatedTravauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCreatedTravauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCreatedTravauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
