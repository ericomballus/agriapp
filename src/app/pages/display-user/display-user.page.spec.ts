import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayUserPage } from './display-user.page';

describe('DisplayUserPage', () => {
  let component: DisplayUserPage;
  let fixture: ComponentFixture<DisplayUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
