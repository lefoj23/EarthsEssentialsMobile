import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { MyRequestPage } from './my-request.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MyRequestPage', () => {
  let component: MyRequestPage;
  let fixture: ComponentFixture<MyRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyRequestPage],
        imports: [
            IonicModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
