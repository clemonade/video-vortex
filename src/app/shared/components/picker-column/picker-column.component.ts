import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IonPickerColumn, IonPickerColumnOption} from "@ionic/angular/standalone";


@Component({
  selector: 'app-picker-column',
  standalone: true,
  imports: [
    IonPickerColumn,
    IonPickerColumnOption
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PickerColumnComponent
    }
  ],
  templateUrl: './picker-column.component.html',
  styleUrl: './picker-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickerColumnComponent implements ControlValueAccessor {
  changeDetectorRef = inject(ChangeDetectorRef);

  value?: string;
  disabled = false;

  onChange = (value: any) => {
  };
  onTouched = () => {
  };

  writeValue(value: string): void {
    this.value = value;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
    this.changeDetectorRef.markForCheck();
  }
}
