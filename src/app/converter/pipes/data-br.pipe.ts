import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  /**
   * Applying the Brazilian Date style
   * 
   * @param dataEn 
   * @returns string default dd/mm/yyyy 
   */
  transform(dataEn: string): string {
    if (!dataEn) {
      return '';
    }

    const dataArr = dataEn.split('-');

    if (dataArr.length !== 3) {
      return dataEn;
    }
    return `${dataArr[2]}/${dataArr[1]}/${dataArr[0]}`;
  }

}
