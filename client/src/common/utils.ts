import moment from 'moment';
import 'moment-timezone';

moment.locale('ko');
const tzSeoul = 'Asia/Seoul';

export const convertDBTimeTohhmmA = (dbTime: string) => {
  const seoul = moment.tz(new Date(dbTime), tzSeoul);
  return seoul.format('hh:mm A');
};

export const convertMillToMMDDYYYY = (date: number) => {
  const seoul = moment.tz(date, tzSeoul);
  return seoul.format('MM-DD-YYYY');
};
