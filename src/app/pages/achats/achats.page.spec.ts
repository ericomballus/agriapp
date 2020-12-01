import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchatsPage } from './achats.page';

describe('AchatsPage', () => {
  let component: AchatsPage;
  let fixture: ComponentFixture<AchatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
