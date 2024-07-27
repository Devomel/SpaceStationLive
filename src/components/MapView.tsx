import { LatLngTuple } from "leaflet";
import { FC, useEffect } from "react";
import { useMap } from "react-leaflet"


interface IPopupProps {
  position: LatLngTuple
}
export const MapView: FC<IPopupProps> = ({ position }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  return (
    <div></div>
  )
}
