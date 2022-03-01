import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterService } from '..';
import { DataBrPipe } from '../pipes';

import { CotationModalComponent } from './cotation-modal.component';

describe('CotationModalComponent', () => {
  let component: CotationModalComponent;
  let fixture: ComponentFixture<CotationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CotationModalComponent,
        DataBrPipe
       ],
       providers: [ConverterService],
       imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
