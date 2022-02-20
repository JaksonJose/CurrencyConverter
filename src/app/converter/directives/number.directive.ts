import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  /**
   * Implement keyup event for the directive element
   * @param $event any $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any): void {
    let value = $event.target.value;
    let posDecimals = value.indexOf('.'); //returns the position of '.'

    value = value.replace(/[\D]/g, ''); //if not number, then replace to ''

    // Add verify if there is a number
    if (posDecimals > 0) {
      // build the number in american format
      value = value.substr(0, posDecimals) + '.' + value.substr(posDecimals);
    }

    $event.target.value = value;
    this.onChange(value);
  }

  /**
   * Register the function to be called for updating the value in model
   * @param fn 
   */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Register the function to be called for updating the value in model
   * to touched event
   * @param fn 
   */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Get the model value
   * @param value 
   */
  public writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
}
