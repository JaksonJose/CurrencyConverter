import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly BaseUrl: string = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`;
  private currencies: Currency[];

  constructor(private service: HttpClient) { }

  private currenciesObj = [
    {"short": "USD", "description": "American Dollar"},
    {"short": "BRL", "description": "Brazilian Real"},
    {"short": "AUD", "description": "Australian Dollar"},
  ]

  public GetAllCurrencies() {
    return this.service.get<any>(this.BaseUrl);
  }

  public listAll(currenciesList: any): Currency[] {
    if (this.currencies) {
      return this.currencies;
    }
    
    return this.currenciesObj;
  }
}
