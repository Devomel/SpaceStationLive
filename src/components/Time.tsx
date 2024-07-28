import { FC } from "react"
import getTimeInUTC from "../utils/DateUtil"
import "../styles/timeText.css"

interface ITimeProps {
  timestamp: number
}
export const Time: FC<ITimeProps> = ({ timestamp }) => {
  const { day, dayOfWeek, time, year } = getTimeInUTC(timestamp)

  return (
    <>
      <div className="timeText">
        <span>
          Current UTC Time: {time}
          <br />
          {dayOfWeek}, {day}, {year}
        </span>
      </div>


    </>
  )
}
