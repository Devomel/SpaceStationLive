import { FC } from "react"
import getTimeInUTC from "../utils/DateUtil"


interface ITimeProps {
  timestamp: number
}
export const Time: FC<ITimeProps> = ({ timestamp }) => {
  const { day, dayOfWeek, time, year } = getTimeInUTC(timestamp)
  return (
    <>
      <div>Current UTC Time: {time}</div>
      <div>{dayOfWeek}, {day}, {year}</div>
    </>
  )
}
