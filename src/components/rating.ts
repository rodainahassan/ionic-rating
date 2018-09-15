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
  template: `
    <ion-buttons>
      <button type="button" [disabled]="readonly" ion-button icon-only clear [small]="small" *ngFor="let current of [1, 2, 3, 4, 5]; let i = index"
        (click)="onClick(i + 1)" (mouseover)="hoverRate = i + 1" (mouseleave)="hoverRate = 0">
        <ion-icon name="star" [class.filled]="(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))"></ion-icon>
      </button>
    </ion-buttons>
  `,
  styles: [
    `
      [ion-button][disabled] {
        opacity: 1;
      }

      ion-icon {
        color: gray;

        &.filled {
          color: orange;
        }
      }
    `
  ],
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
