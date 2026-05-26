import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";

import { divIcon } from "leaflet";
import { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* CUSTOM ICONS */

const greenIcon = divIcon({
  className: "",
  html: `
    <div class="relative">
      <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-green-400 opacity-75"></div>
      <div class="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-2 border-white"></div>
    </div>
  `,
  iconSize: [24, 24],
});

const redIcon = divIcon({
  className: "",
  html: `
    <div class="relative">
      <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75"></div>
      <div class="relative inline-flex rounded-full h-6 w-6 bg-red-500 border-2 border-white"></div>
    </div>
  `,
  iconSize: [24, 24],
});

const yellowIcon = divIcon({
  className: "",
  html: `
    <div class="relative">
      <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-yellow-300 opacity-75"></div>
      <div class="relative inline-flex rounded-full h-6 w-6 bg-yellow-400 border-2 border-white"></div>
    </div>
  `,
  iconSize: [24, 24],
});

function LiveMap() {
  useEffect(() => {
    L.Icon.Default.mergeOptions({});
  }, []);

  return (
    <section className="py-24 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Live Satellite Fleet Intelligence
          </h2>

          <p className="text-gray-400 text-lg">
            AI-powered realtime vehicle monitoring and enterprise GPS analytics.
          </p>

        </div>

        {/* MAP */}

        <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,0.15)]">

          <MapContainer
            center={[22.8046, 86.2029]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-[750px] w-full z-0"
          >

            {/* HD SATELLITE */}

            <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* VEHICLE 1 */}

            <Marker position={[22.8046, 86.2029]} icon={greenIcon}>
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

            <Marker position={[22.8246, 86.1829]} icon={redIcon}>
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

            <Marker position={[22.7846, 86.2229]} icon={yellowIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-3301</strong>

                  <br />

                  Battery Warning

                  <br />

                  Battery: 43%

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 4 */}

            <Marker position={[22.8121, 86.2511]} icon={greenIcon}>
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

            {/* VEHICLE 5 */}

            <Marker position={[22.7721, 86.1911]} icon={greenIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-5502</strong>

                  <br />

                  Delivery Running

                  <br />

                  Speed: 48 km/h

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 6 */}

            <Marker position={[22.8421, 86.2311]} icon={redIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-6619</strong>

                  <br />

                  Emergency Alert

                  <br />

                  Engine Temperature High

                </div>
              </Popup>
            </Marker>

            {/* VEHICLE 7 */}

            <Marker position={[22.7921, 86.2711]} icon={yellowIcon}>
              <Popup>
                <div className="text-black">

                  <strong>BDPH-7720</strong>

                  <br />

                  Battery Under Observation

                  <br />

                  Voltage Fluctuation

                </div>
              </Popup>
            </Marker>

            {/* LIVE ZONES */}

            <CircleMarker
              center={[22.8046, 86.2029]}
              radius={50}
              pathOptions={{
                color: "#22c55e",
                fillColor: "#22c55e",
                fillOpacity: 0.15,
              }}
            />

            <CircleMarker
              center={[22.8246, 86.1829]}
              radius={40}
              pathOptions={{
                color: "#ef4444",
                fillColor: "#ef4444",
                fillOpacity: 0.15,
              }}
            />

          </MapContainer>

        </div>

      </div>

    </section>
  );
}

export default LiveMap;
