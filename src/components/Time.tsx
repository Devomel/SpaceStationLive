import { FC } from "react"
import getTimeInUTC from "../utils/DateUtil"
import "../styles/timeText.css"

interface ITimeProps {
  timestamp: number
}
export const Time: FC<ITimeProps> = ({ timestamp }) => {
  const { day, dayOfWeek, time, year, month } = getTimeInUTC(timestamp)

  return (
    <>
      <div className="timeText">
        Time (UTC): {time}
        <br />
        {dayOfWeek}, {day}, {month}
        <br />
        {year}
      </div>
    </>
  )
}
