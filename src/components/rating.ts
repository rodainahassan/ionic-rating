import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "rating",
  templateUrl: "rating.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements ControlValueAccessor {
  @Input()
  rate: number;
  @Input()
  readonly: boolean;
  @Input()
  small: boolean;
  @Output()
  rateChange: EventEmitter<number> = new EventEmitter();
  hoverRate: number;
  propagateChange: Function;

  onClick(rate) {
    this.rate = rate;
    this.rateChange.emit(this.rate);
    this.propagateChange(this.rate);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.rate = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }
}
