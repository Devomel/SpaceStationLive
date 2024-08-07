import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { MapView } from "./MapView";
import { FC, ReactNode } from "react";
import { LatLngTuple } from "leaflet";
import { issSlice } from "../services/StationService";
import { Time } from "./Time";
import { LocationText } from "./LocationText";
import "../styles/map.css"


export type LocationType = LatLngTuple
export interface IMapProps {
  children?: ReactNode
}

export const Map: FC<IMapProps> = ({ children }) => {
  const { data: location, error, isLoading } = issSlice.useFetchLocationISSQuery("", {
    selectFromResult: ({ data, error, isLoading }) => ({
      data,
      error,
      isLoading,
    }),
    pollingInterval: 5000
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (location && location[2])
    return (
      <>
        <div className="mapContainer">
          <LocationText location={location} />
          <Time timestamp={location[2]} />
          <MapContainer center={location} zoom={5} scrollWheelZoom={false}
            className="map">
            <TileLayer
              attribution=''
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapView position={location} />
            <Marker position={location}>
            </Marker>
          </MapContainer>
          {children}
        </div>
      </>
    )
}
