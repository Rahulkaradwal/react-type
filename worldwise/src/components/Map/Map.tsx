import { FC, ReactElement } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map: FC = (): ReactElement => {
  return (
    <MapContainer
      className="h-full w-full z-0"
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>A pretty popup. Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};
