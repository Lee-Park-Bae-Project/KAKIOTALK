import moment from 'moment-timezone';

moment.locale('ko');
moment.tz.setDefault('Asia/Seoul');
export const convertDBTimeTohhmmA = (dbTime: string) => moment(new Date(dbTime), 'MM-DD-YYYY HH:mm:ss').format('hh:mm A');

export const convertMillToMMDDYYYY = (date: number) => moment(date).format('MM-DD-YYYY');
