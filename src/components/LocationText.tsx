import { LatLngTuple } from "leaflet"
import { FC } from "react"
import "../styles/locationText.css"

interface ILocationTextProps {
  location: LatLngTuple
}

export const LocationText: FC<ILocationTextProps> = ({ location }) => {
  return (
    <div className="locationText">
      ISS current location:  <br />
      longitude: {location[0]} <br /> latitude: {location[1]}
    </div>
  )
}
