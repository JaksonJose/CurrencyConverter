import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[];

  constructor() { }

  private currencyObj = [
    {"short": "AUD", "description": "Autralian Dollar"}
  ]

  listAll(): Currency[] {
    if (this.currencies) {
      return this.currencies;
    }

    this.currencies = [];

    for (let currencyObj of this.currencyObj) {
      let currency: Currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencies.push(currency);
    }

    return this.currencies;
  }
}
