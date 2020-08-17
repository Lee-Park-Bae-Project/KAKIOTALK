import moment from 'moment'
import swal from 'sweetalert'
import 'moment/locale/ko'
import { createBrowserHistory } from 'history'

require('moment-timezone')

moment.locale('ko')
moment.tz.setDefault('Asia/Seoul')
const tzSeoul = 'Asia/Seoul'
const DB_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export const browserHistory = createBrowserHistory()

export const convertDBTimeTohhmmA = (date: string) => moment(date).format('LLL')
export const convertTimeForMsgFormat = (date: string) => moment(date).format('LT')
export const convertMillToMMDDYYYY = (date: number) => {
  const seoul = moment.tz(date, tzSeoul)
  return seoul.format('MM-DD-YYYY')
}

export const convertToLL = (date: string) => moment(date).format('LL')

export const getCurTimeDBFormat = () => moment(Date.now()).format(DB_TIME_FORMAT)

export const getCurTimeDBFormatForTest = (date: Date) => Date.now()

export const getDayDiff = (date: string) => Math.abs(moment(date).diff(moment(Date.now()), 'days'))
export const alert = {
  addFriend: (name: string) => swal(`${name}님을 친구로 추가했습니다.`, '', 'success'),
  deleteFriend: () => swal('삭제되었습니다.', '', 'success'),
  confirmDelete: (name: string) => swal(`${name}님을 친구에서 삭제하시겠습니까?`, { buttons: ['취소', true] }),
  error: (message: string) => swal(message, '', 'error'),
}

export const push = (targetUrl: string) => {
  browserHistory.push(targetUrl)
}
