import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaieUserPage } from './paie-user.page';

describe('PaieUserPage', () => {
  let component: PaieUserPage;
  let fixture: ComponentFixture<PaieUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaieUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaieUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
