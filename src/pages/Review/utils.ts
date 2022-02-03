import { Channel } from '../../constants'
import Airbnb from '../../images/AIRBNB.svg'
import Holidu from '../../images/HOLIDU.svg'
import Booking from '../../images/BOOKINGCOM.svg'

export const getChannelImage = (value: Channel) => {
  switch (value) {
    case Channel.AIRBNB:
      return Airbnb
    case Channel.HOLIDU:
      return Holidu
    case Channel.BOOKINGCOM:
      return Booking
    default:
      return Holidu
  }
}
export const getDate = (value: Date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date = new Date(value)
  const [month, day, year] = [
    monthNames[date.getMonth()],
    date.getDate(),
    date.getFullYear(),
  ]
  return `${day} ${month} ${year}`
}
