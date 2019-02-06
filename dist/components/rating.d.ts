import { EventEmitter } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
export declare class RatingComponent implements ControlValueAccessor {
    rate: number;
    readonly: boolean;
    size: string;
    rateChange: EventEmitter<number>;
    hoverRate: number;
    _onChange: Function;
    onClick(rate: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
