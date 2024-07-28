import { LatLngTuple } from "leaflet"
import { FC } from "react"

interface ILocationTextProps {
  location: LatLngTuple
}

export const LocationText: FC<ILocationTextProps> = ({ location }) => {
  return (
    <div style={{ gridColumnStart: 1, gridRowStart: 1 }}>
      <span>
        ISS current location: <br />
        longitude: {location[0]} <span style={{ whiteSpace: "nowrap" }}>latitude: {location[1]}</span>
      </span>
    </div>
  )
}
