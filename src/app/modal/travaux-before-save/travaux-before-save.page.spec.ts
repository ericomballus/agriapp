import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravauxBeforeSavePage } from './travaux-before-save.page';

describe('TravauxBeforeSavePage', () => {
  let component: TravauxBeforeSavePage;
  let fixture: ComponentFixture<TravauxBeforeSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravauxBeforeSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravauxBeforeSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
