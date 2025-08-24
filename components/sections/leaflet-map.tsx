"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function LeafletMap() {
  return (
    <MapContainer center={[50.622, 3.144]} zoom={15} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.622, 3.144]} icon={markerIcon}>
        <Popup>
          <b>Data4You</b>
          <br />1-3, 1 Allée Lavoisier
          <br />59650 Villeneuve-d&apos;Ascq
        </Popup>
      </Marker>
    </MapContainer>
  )
}
