import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../../app/header-nav/header-nav.module';

import { PurchaseRequestDetailsPage } from './purchase-request-details.page';

describe('PurchaseRequestDetailsPage', () => {
  let component: PurchaseRequestDetailsPage;
  let fixture: ComponentFixture<PurchaseRequestDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseRequestDetailsPage],
        imports: [IonicModule.forRoot(), HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseRequestDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
