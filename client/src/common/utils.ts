import moment from 'moment';
import 'moment-timezone';

moment.locale('ko');
moment.tz.setDefault('Asia/Seoul');

export const convertDBTimeTohhmmA = (dbTime: string) => moment(new Date(dbTime), 'MM-DD-YYYY HH:mm:ss').tz('Asia/Seoul').format('hh:mm A');

export const convertMillToMMDDYYYY = (date: number) => moment(date).tz('Asia/Seoul').format('MM-DD-YYYY');
