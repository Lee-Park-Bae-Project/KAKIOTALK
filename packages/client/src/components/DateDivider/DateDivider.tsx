import * as React from 'react'
import { color } from 'styles/global'

interface Props{
  date: string
}

const hrStyle = {
  flex: '1',
  margin: '0 1rem',
  alignSelf: 'center',
  border: '1px solid #B0C2CD',
}
const DateDivider: React.FC<Props> = ({ date }) => (
  <div style={{
    display: 'flex',
    width: '100%',
    margin: '0.5rem 0',
  }}>
    <hr style={hrStyle}/>
    <span style={{ color: color.TEXT_GRAY }}>{date}</span>
    <hr style={hrStyle}/>
  </div>
)

export default DateDivider
