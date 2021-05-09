import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { ClaimsPage } from './claims.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ClaimsPage', () => {
  let component: ClaimsPage;
  let fixture: ComponentFixture<ClaimsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsPage],
        imports: [
            IonicModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
