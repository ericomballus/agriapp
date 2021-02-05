import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetPage } from './projet.page';

describe('ProjetPage', () => {
  let component: ProjetPage;
  let fixture: ComponentFixture<ProjetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
