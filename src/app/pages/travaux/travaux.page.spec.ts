import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravauxPage } from './travaux.page';

describe('TravauxPage', () => {
  let component: TravauxPage;
  let fixture: ComponentFixture<TravauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
