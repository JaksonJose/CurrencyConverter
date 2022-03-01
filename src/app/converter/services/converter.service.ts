import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Converter, ConverterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  // Api resource: https://1abc.net/topics/cryptocurrency/currency-api-uuid-IvVONQY17
  // https://github.com/fawazahmed0/currency-api
  private readonly BaseUrl: string = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`;
 
  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Api object
   * @param converter 
   * @returns Array<Converter>
   */
  public converter(converter: Converter): Observable<ConverterResponse> {
    let params = `${converter.currencyFrom.toLowerCase()}/${converter.currencyTo.toLowerCase()}.json`;
    return this.httpClient.get<ConverterResponse>(this.BaseUrl + params).pipe(catchError(throwError));
  }

  /**
   * Return the a response cotation 
   * @param converterResponse 
   * @param converter 
   * @returns number
   */
  public cotationTo(converterResponse: ConverterResponse): string {
    if(converterResponse === undefined) return '0';
    return converterResponse.currencyDestiny.toFixed(4);
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
