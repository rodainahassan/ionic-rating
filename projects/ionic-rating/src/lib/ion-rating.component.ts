import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ion-rating',
  templateUrl: './ion-rating.component.html',
  styleUrls: ['./ion-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IonRatingComponent),
      multi: true
    }
  ]
})
export class IonRatingComponent implements ControlValueAccessor, OnChanges {
  @Input() rate: number;
  @Input() readonly: boolean;
  @Input() resettable: boolean;
  @Input() size: string;
  @Output() hover = new EventEmitter<number>();
  @Output() leave = new EventEmitter<number>();
  @Output() rateChange = new EventEmitter<number>();
  hoverRate: number;
  disabled: boolean;
  onChange: (_: number) => void;
  onTouched: () => void;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rate) {
      this.update(this.rate);
    }
  }

  private update(value: number, internalChange = true): void {
    if (!(this.readonly || this.disabled || this.rate === value)) {
      this.rate = value;
      this.rateChange.emit(this.rate);
    }
    if (internalChange) {
      if (this.onChange) {
        this.onChange(this.rate);
      }
      if (this.onTouched) {
        this.onTouched();
      }
    }
  }

  onClick(rate: number): void {
    this.update(this.resettable && this.rate === rate ? 0 : rate);
  }

  onMouseEnter(value: number) {
    if (!(this.disabled || this.readonly)) {
      this.hoverRate = value;
    }
    this.hover.emit(value);
  }

  @HostListener('mouseleave', [])
  onMouseLeave(): void {
    this.leave.emit(this.hoverRate);
    this.hoverRate = 0;
  }

  @HostListener('blur', [])
  onBlur(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: any): void {
    this.update(value, false);
    this.cd.markForCheck();
  }

  registerOnChange(fn: (_: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
