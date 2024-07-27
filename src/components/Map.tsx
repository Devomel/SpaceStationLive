import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapView } from "./MapView";
import { FC } from "react";
import { LatLngTuple } from "leaflet";
export type LocationType = LatLngTuple
export interface IMapProps {
  location: LocationType
}

export const Map: FC<IMapProps> = ({ location }) => {
  return (
    <MapContainer center={location} zoom={4} scrollWheelZoom={false} style={{ height: "80vh", width: "100%" }}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapView position={location} />
      <Marker position={location}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
