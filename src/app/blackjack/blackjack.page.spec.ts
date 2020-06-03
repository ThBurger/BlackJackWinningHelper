import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlackjackPage } from './blackjack.page';

describe('BlackjackPage', () => {
  let component: BlackjackPage;
  let fixture: ComponentFixture<BlackjackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlackjackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
