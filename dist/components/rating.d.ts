import { EventEmitter } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
export declare class RatingComponent implements ControlValueAccessor {
    rate: number;
    readonly: boolean;
    small: boolean;
    rateChange: EventEmitter<number>;
    hoverRate: number;
    propagateChange: Function;
    onClick(rate: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
