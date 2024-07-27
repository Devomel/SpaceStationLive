import { FC } from "react"
import { IAstronaut } from "../models/IAstronaut"
import "../styles/crewList.css"
interface ICrewItemProps {
  astronaut: IAstronaut
}
export const CrewItem: FC<ICrewItemProps> = ({ astronaut }) => {
  return (
    <div className="crewList__item">
      {astronaut.name}
    </div>
  )
}
