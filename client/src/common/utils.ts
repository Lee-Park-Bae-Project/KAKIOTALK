import moment from 'moment';
import 'moment-timezone';

moment.locale('ko');
const tzSeoul = 'Asia/Seoul';
const DB_TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss';

export const convertDBTimeTohhmmA = (dbTime: string) => {
  const seoul = moment.tz(new Date(dbTime), tzSeoul);
  return seoul.format('hh:mm A');
};

export const convertMillToMMDDYYYY = (date: number) => {
  const seoul = moment.tz(date, tzSeoul);
  return seoul.format('MM-DD-YYYY');
};

export const getCurTimeDBFormat = () => {
  const date = new Date();
  return moment
    .utc(date)
    .tz(tzSeoul)
    .format(DB_TIME_FORMAT);
};

export const getCurTimeDBFormatForTest = (date: Date) => moment
  .utc(date)
  .tz(tzSeoul)
  .format(DB_TIME_FORMAT);
