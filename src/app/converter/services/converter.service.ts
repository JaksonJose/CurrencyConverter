import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Converter, ConverterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BaseUrl = "http://api.fixer.io/latest";

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Api object
   * @param converter 
   * @returns Array<Converter>
   */
  public converter(converter: Converter): Observable<ConverterResponse> {
    let params = `?base=${converter.currencyFrom}&symbols=${converter.currencyTo}`;

    return this.httpClient.get<ConverterResponse>(this.BaseUrl + params);
  }

  /**
   * Return the a response cotation 
   * @param converterResponse 
   * @param converter 
   * @returns number
   */
  public convertTo(converterResponse: ConverterResponse, converter: Converter): number {
    if(converterResponse === undefined) return 0;

    return converterResponse.rates[converter.currencyTo];
  }
  
  /**
   * Return cotation from a response
   * @param converterResponse 
   * @param converter 
   * @returns string
   */
  public convertFrom(converterResponse: ConverterResponse, converter: Converter): string {
    if(converterResponse === undefined) return '0';

    return converterResponse.rates[converter.currencyFrom].toFixed(4);
  }

  /**
   * Return the cotation date from a response
   * @param converterResponse 
   * @returns ''
   */
  public cotationDate(converterResponse: ConverterResponse): string {
    if(converterResponse === undefined) return '';

    return converterResponse.date;
  }

  
}
