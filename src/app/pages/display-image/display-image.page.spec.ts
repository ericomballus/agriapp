import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayImagePage } from './display-image.page';

describe('DisplayImagePage', () => {
  let component: DisplayImagePage;
  let fixture: ComponentFixture<DisplayImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
