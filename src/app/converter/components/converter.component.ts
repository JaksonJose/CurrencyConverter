import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConverterService, CurrencyService } from '../services';
import { Converter, ConverterResponse, Currency } from '../models';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  public currencies: Array<Currency>;
  public convertion: Converter;
  public convertionResponse: ConverterResponse;
  public isError: boolean;

  @ViewChild("converterForm", { static: true }) converterForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
    ) { }

  ngOnInit(): void {
    this.FetchAllCurrencies();
    this.init();
  }

  /**
   * Call the value convertion
   */
  public init(): void {
    this.convertion = new Converter('USD', 'BRL', null);
    this.isError = false;
  }

  private FetchAllCurrencies() {
    const response = this.currencyService.GetAllCurrencies();
    let currenciesList = [];  
    
    response.subscribe(response => {       

      for(let key in response) {
        let currencyObj = {
          "short": key.toUpperCase(),
          "description": response[key].substring(0, 20)
        };

        currenciesList.push(currencyObj);
      }
    });
    
    this.currencies = currenciesList
  }

  /**
   * Call the value convertion
   */
  public converting(): void {
    if(this.converterForm.form.valid) {
      this.converterService.converter(this.convertion)
        .subscribe({next: (response) => {
          this.convertionResponse  = {
            date: response.date,
            currencyDestiny: response[this.convertion.currencyTo.toLowerCase()]
          }
        },
          error: () => this.isError = true})
    }
  }
}