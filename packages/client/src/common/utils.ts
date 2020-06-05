import moment from 'moment'
import 'moment-timezone'
import swal from 'sweetalert'

moment.locale('ko')
const tzSeoul = 'Asia/Seoul'
const DB_TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'

export const convertDBTimeTohhmmA = (dbTime: string) => {
  const seoul = moment.tz(new Date(dbTime), tzSeoul)
  return seoul.format('hh:mm A')
}

export const convertMillToMMDDYYYY = (date: number) => {
  const seoul = moment.tz(date, tzSeoul)
  return seoul.format('MM-DD-YYYY')
}

export const getCurTimeDBFormat = () => {
  const date = new Date()
  return moment
    .utc(date)
    .tz(tzSeoul)
    .format(DB_TIME_FORMAT)
}

export const getCurTimeDBFormatForTest = (date: Date) => moment
  .utc(date)
  .tz(tzSeoul)
  .format(DB_TIME_FORMAT)
const alert = {
  addFriend: (name: string) => swal(`${name}님을 친구로 추가했습니다.`, '', 'success'),
  deleteFriend: () => swal('삭제되었습니다.', '', 'success'),
  confirmDelete: (name: string) => swal(`${name}님을 친구에서 삭제하시겠습니까?`, { buttons: ['취소', true] }),
  error: (message: string) => swal(message, '', 'error'),
}
export { alert }
