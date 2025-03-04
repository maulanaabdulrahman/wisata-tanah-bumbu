import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import CSS Leaflet
import geojsonData from "../../data/geojsonData";
import PopupCard from "../../components/PopupCard";
import SearchField from "../../components/SearchField";
import DetailCard from "../../components/DetailCard";
import { useState } from "react";

function Map() {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="relative flex-1 z-10">
      <SearchField />
      <DetailCard isDetail={isDetail} />

      <MapContainer
        center={[-3.37611, 115.772301]}
        zoom={10}
        className="h-full w-full"
        zoomControl={false}
      >
        <LayersControl position="topright">
          {/* Peta Standar */}
          <LayersControl.BaseLayer name="Peta" checked>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>

          {/* Peta Satelit */}
          <LayersControl.BaseLayer name="Satelit">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Marker */}
        <Marker position={[-3.2025674, 115.7946576]}>
          <Popup>
            <PopupCard
              image={"/gua-liang-bangkai.png"}
              title="Gua Liang Bangkai"
              location={"Kecamatan Mentewe"}
              view={120}
              setIsDetail={setIsDetail}
            />
          </Popup>
        </Marker>
        <Marker position={[-3.6099914, 115.860905]}>
          <Popup>
            <PopupCard
              image={"/pantai-pagatan.jpg"}
              title="Pantai Pagatan"
              location={"Kecamatan Mentewe"}
              view={320}
              setIsDetail={setIsDetail}
            />
          </Popup>
        </Marker>

        {/* GeoJSON */}
        <GeoJSON
          data={geojsonData}
          style={{ color: "#1D5477", fillColor: "blue", fillOpacity: 0.3 }}
        />
      </MapContainer>
    </div>
  );
}

export default Map;
