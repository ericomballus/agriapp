import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouteractivitePage } from './ajouteractivite.page';

describe('AjouteractivitePage', () => {
  let component: AjouteractivitePage;
  let fixture: ComponentFixture<AjouteractivitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteractivitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouteractivitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
