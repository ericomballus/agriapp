import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JustificatifPage } from './justificatif.page';

describe('JustificatifPage', () => {
  let component: JustificatifPage;
  let fixture: ComponentFixture<JustificatifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificatifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JustificatifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
