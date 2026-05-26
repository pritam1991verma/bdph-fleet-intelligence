import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* DEFAULT MARKER ICON */

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

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Satellite Fleet Intelligence
          </h2>

          <p className="text-gray-400 text-lg">
            Realtime AI-powered GPS tracking and satellite monitoring system.
          </p>

        </div>

        {/* MAP CONTAINER */}

        <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

          <MapContainer
            center={[22.8046, 86.2029]}
            zoom={14}
            scrollWheelZoom={true}
            className="h-[700px] w-full z-0"
          >

            {/* HD SATELLITE VIEW */}

            <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* VEHICLE 1 */}

            <Marker position={[22.8046, 86.2029]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-1021</strong>

                  <br />

                  Status: ACTIVE

                  <br />

                  Speed: 62 km/h

                  <br />

                  Fuel: 78%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 2 */}

            <Marker position={[22.8246, 86.1829]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-2044</strong>

                  <br />

                  Fuel Alert Detected

                  <br />

                  Fuel Remaining: 21%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 3 */}

            <Marker position={[22.7846, 86.2229]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-3301</strong>

                  <br />

                  Battery Stable

                  <br />

                  Battery Health: 94%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 4 */}

            <Marker position={[22.8121, 86.2511]} icon={DefaultIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-4410</strong>

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
