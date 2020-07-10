import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatethisappPage } from './ratethisapp.page';

describe('RatethisappPage', () => {
  let component: RatethisappPage;
  let fixture: ComponentFixture<RatethisappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatethisappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatethisappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
