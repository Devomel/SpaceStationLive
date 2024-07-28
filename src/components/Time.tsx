import { FC } from "react"
import getTimeInUTC from "../utils/DateUtil"


interface ITimeProps {
  timestamp: number
}
export const Time: FC<ITimeProps> = ({ timestamp }) => {
  const { day, dayOfWeek, time, year } = getTimeInUTC(timestamp)

  return (
    <>
      <div style={{ gridColumnStart: 3, gridRowStart: 1 }}>
        <span>
          Current UTC Time: {time}
          <br />
          {dayOfWeek}, {day}, {year}
        </span>
      </div>


    </>
  )
}
