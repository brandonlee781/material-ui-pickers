import { ComponentClass, ReactNode } from 'react';
import { DateTimePickerView } from '../constants/date-picker-view';
import { DateType } from '../constants/prop-types';
import { Utils } from '../utils/utils';
import { RenderDay } from '../DatePicker/Calendar';

export interface DateTimePickerProps {
  date: object;
  minDate?: DateType;
  maxDate?: DateType;
  onChange: (date: object, isFinished?: boolean) => void;
  disableFuture?: boolean;
  autoSubmit?: boolean;
  showTabs?: boolean;
  ampm?: boolean;
  openTo?: DateTimePickerView;
  leftArrowIcon: ReactNode;
  rightArrowIcon: ReactNode;
  dateRangeIcon?: ReactNode;
  timeIcon?: ReactNode;
  renderDay?: RenderDay;
  utils?: Utils;
}

declare const DateTimePicker: ComponentClass<DateTimePickerProps>;

export default DateTimePicker;
