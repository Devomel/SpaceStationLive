import { LatLngTuple } from "leaflet"
import { FC } from "react"
import "../styles/locationText.css"

interface ILocationTextProps {
  location: LatLngTuple
}

export const LocationText: FC<ILocationTextProps> = ({ location }) => {
  return (
    <div className="locationText">
      <span>
        <span style={{ whiteSpace: "nowrap" }}>ISS current location:</span>  <br />
        longitude: {location[0]} <span style={{ whiteSpace: "nowrap" }}>latitude: {location[1]}</span>
      </span>
    </div>
  )
}
