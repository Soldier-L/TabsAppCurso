import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeVoltaParaOFuturoPage } from './de-volta-para-o-futuro.page';

describe('DeVoltaParaOFuturoPage', () => {
  let component: DeVoltaParaOFuturoPage;
  let fixture: ComponentFixture<DeVoltaParaOFuturoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeVoltaParaOFuturoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeVoltaParaOFuturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
