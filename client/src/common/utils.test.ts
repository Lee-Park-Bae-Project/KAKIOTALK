import {
  convertDBTimeTohhmmA,
  convertMillToMMDDYYYY,
} from './utils';

describe('moment', () => {
  describe('convertDBTimeTohhmmA()', () => {
    const dbTime = '2020-04-25 22:13:52';
    it('should return hh:mm A format', () => {
      expect(convertDBTimeTohhmmA(dbTime)).toEqual('10:13 오후');
    });
  });

  describe('convertMillToMMDDYYYY()', () => {
    it('should return MM-DD-YYYY format', () => {
      expect(convertMillToMMDDYYYY(1587838230372)).toEqual('04-26-2020');
    });
  });
});
