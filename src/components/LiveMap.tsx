import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* DEFAULT ICON */

const DefaultIcon = L.icon({
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png",

  iconRetinaUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LiveMap() {
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconUrl:
        "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png",

      iconRetinaUrl:
        "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png",

      shadowUrl:
        "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <section className="py-24 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Satellite GPS Intelligence
          </h2>

          <p className="text-gray-400 text-lg">
            Realtime enterprise fleet monitoring and live satellite tracking.
          </p>

        </div>

        {/* MAP */}

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 shadow-2xl">

          <MapContainer
            center={[22.8046, 86.2029]}
            zoom={12}
            scrollWheelZoom={true}
            className="h-[650px] w-full"
          >

            {/* SATELLITE VIEW */}

            <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* ROAD LABELS */}

            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              opacity={0.35}
            />

            {/* VEHICLE 1 */}

            <Marker position={[22.8046, 86.2029]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>Vehicle BDPH-1021</strong>

                  <br />

                  Status: ACTIVE

                  <br />

                  Speed: 62 km/h

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 2 */}

            <Marker position={[22.8246, 86.1829]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>Vehicle BDPH-2044</strong>

                  <br />

                  Fuel Alert Detected

                  <br />

                  Fuel: 21%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 3 */}

            <Marker position={[22.7846, 86.2229]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>Vehicle BDPH-3301</strong>

                  <br />

                  Battery Stable

                  <br />

                  Battery: 94%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 4 */}

            <Marker position={[22.8121, 86.2511]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>Vehicle BDPH-4410</strong>

                  <br />

                  Route Optimized

                  <br />

                  ETA: 14 mins

                </div>
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </div>

    </section>
  );
}

export default LiveMap;
