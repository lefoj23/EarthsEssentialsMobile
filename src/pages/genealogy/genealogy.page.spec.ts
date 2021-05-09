import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { GenealogyPage } from './genealogy.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('GenealogyPage', () => {
  let component: GenealogyPage;
  let fixture: ComponentFixture<GenealogyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenealogyPage],
        imports: [
            IonicModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GenealogyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
