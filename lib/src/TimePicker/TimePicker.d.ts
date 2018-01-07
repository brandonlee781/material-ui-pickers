import { ComponentClass } from 'react';
import { Utils } from '../utils/utils';

export interface TimePickerProps {
    date: object;
    onChange: (date: object, isFinished?: boolean) => void;
    ampm?: boolean;
    utils?: Utils;
    steps?: number;
}

declare const TimePicker: ComponentClass<TimePickerProps>;

export default TimePicker;
