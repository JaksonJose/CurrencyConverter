import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format the data yyyy-mm-dd to dd/mm/yyyy', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-03-01')).toEqual('01/03/2022');
  })
});
