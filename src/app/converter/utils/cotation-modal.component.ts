import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Converter, ConverterResponse } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'cotation-modal',
  templateUrl: './cotation-modal.component.html',
  styleUrls: ['./cotation-modal.component.scss']
})
export class CotationModalComponent implements OnInit {

  @Input() id: string;
  @Input() convertionResponse: ConverterResponse;
  @Input() convertion: Converter = new Converter();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ConverterService) { }

  ngOnInit(): void {
  }

  public newSearch() {
    this.onConfirm.emit();
  }

  // Return the value calculated
  get convertedValue(): string {
    if (this.convertionResponse === undefined) return '0';
    return `${(this.convertion.value * this.convertionResponse.currencyDestiny).toFixed(2)}`;
  }

  // Returns current cotation
  get cotationTo(): string {    
    return this.service.cotationTo(this.convertionResponse);
  }
  
  // Returns the date of cotation
  get dateCotation(): string {
    return this.service.cotationDate(this.convertionResponse);
  }
}
