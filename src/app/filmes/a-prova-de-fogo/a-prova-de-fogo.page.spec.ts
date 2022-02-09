import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AProvaDeFogoPage } from './a-prova-de-fogo.page';

describe('AProvaDeFogoPage', () => {
  let component: AProvaDeFogoPage;
  let fixture: ComponentFixture<AProvaDeFogoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AProvaDeFogoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AProvaDeFogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
