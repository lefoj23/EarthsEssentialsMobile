import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../../app/header-nav/header-nav.module';

import { AddRequestPage } from './add-request.page';

describe('AddRequestPage', () => {
    let component: AddRequestPage;
    let fixture: ComponentFixture<AddRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AddRequestPage],
        imports: [IonicModule.forRoot(), HeaderNavComponentModule]
    }).compileComponents();

      fixture = TestBed.createComponent(AddRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
