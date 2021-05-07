import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { PurchaseRequestApprovalPage } from './purchase-request-approval.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('PurchaseRequestApprovalPage', () => {
  let component: PurchaseRequestApprovalPage;
  let fixture: ComponentFixture<PurchaseRequestApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseRequestApprovalPage],
        imports: [
            IonicModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseRequestApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
