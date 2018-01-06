import moment from 'moment';
import { getHours, getMinutes, convertToMeridiem, roundToStep } from '../../src/utils/time-utils';

describe('Time utils', () => {
  it('Should properly calculate hours', () => {
    expect(getHours(25, 50)).toBe(10);
  });

  it('Should properly calculate minutes', () => {
    expect(getMinutes(25, 50)).toBe(51);
  });

  it('Should convert time to meridiem', () => {
    const time = convertToMeridiem(moment('2017-01-01T16:00'), 'am', true);
    expect(time.hours()).toBe(4);
  });

  describe('roundToStep utility', () => {
    it('Should round down to 10 minutes past the hour', () => {
      const time = roundToStep(moment('2017-01-01T16:12'), 5);
      expect(time.minute()).toBe(10);
    });

    it('Should round up to 15 minutes past the hour', () => {
      const time = roundToStep(moment('2017-01-01T16:13'), 5);
      expect(time.minute()).toBe(15);
    });

    it('Should round to zero minutes past the hour and keep the hour the same', () => {
      const original = moment(moment('2017-01-01T16:59'))
      const rounded = roundToStep(original.clone(), 5);
      expect(rounded.minute()).toBe(0);
      expect(rounded.hours()).toEqual(original.hours());
    });
  })
});

