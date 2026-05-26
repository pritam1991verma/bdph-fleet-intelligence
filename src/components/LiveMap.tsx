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

    <section
      id="tracking"
      className="py-24 px-6 bg-black overflow-hidden max-w-full"
    >

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
            zoom={11}
            scrollWheelZoom={true}
            className="h-[750px] w-full max-w-full overflow-hidden z-0"
          >

            {/* HD SATELLITE */}

            <TileLayer
              attribution="&copy; Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* VEHICLE NETWORK */}

            <Marker position={[22.8046, 86.2029]} icon={greenIcon}>
              <Popup>BDPH-1021 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.8246, 86.1829]} icon={redIcon}>
              <Popup>BDPH-2044 • FUEL ALERT</Popup>
            </Marker>

            <Marker position={[22.7846, 86.2229]} icon={yellowIcon}>
              <Popup>BDPH-3301 • BATTERY WARNING</Popup>
            </Marker>

            <Marker position={[22.8121, 86.2511]} icon={greenIcon}>
              <Popup>BDPH-4410 • ROUTE ACTIVE</Popup>
            </Marker>

            <Marker position={[22.7721, 86.1911]} icon={greenIcon}>
              <Popup>BDPH-5502 • DELIVERY ACTIVE</Popup>
            </Marker>

            <Marker position={[22.8421, 86.2311]} icon={redIcon}>
              <Popup>BDPH-6619 • ENGINE ALERT</Popup>
            </Marker>

            <Marker position={[22.7921, 86.2711]} icon={yellowIcon}>
              <Popup>BDPH-7720 • LOW BATTERY</Popup>
            </Marker>

            <Marker position={[22.7521, 86.2411]} icon={greenIcon}>
              <Popup>BDPH-8101 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.8621, 86.1711]} icon={greenIcon}>
              <Popup>BDPH-9104 • RUNNING</Popup>
            </Marker>

            <Marker position={[22.8721, 86.2811]} icon={yellowIcon}>
              <Popup>BDPH-1130 • MONITORING</Popup>
            </Marker>

            <Marker position={[22.7421, 86.1411]} icon={greenIcon}>
              <Popup>BDPH-1208 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.7221, 86.3011]} icon={redIcon}>
              <Popup>BDPH-1304 • SOS ALERT</Popup>
            </Marker>

            <Marker position={[22.8921, 86.2111]} icon={greenIcon}>
              <Popup>BDPH-1420 • ONLINE</Popup>
            </Marker>

            <Marker position={[22.9121, 86.2411]} icon={yellowIcon}>
              <Popup>BDPH-1520 • BATTERY CHECK</Popup>
            </Marker>

            <Marker position={[22.6921, 86.2611]} icon={greenIcon}>
              <Popup>BDPH-1601 • DELIVERY ACTIVE</Popup>
            </Marker>

            <Marker position={[22.6621, 86.2211]} icon={greenIcon}>
              <Popup>BDPH-1722 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.6521, 86.1611]} icon={redIcon}>
              <Popup>BDPH-1820 • FUEL CRITICAL</Popup>
            </Marker>

            <Marker position={[22.9421, 86.1911]} icon={greenIcon}>
              <Popup>BDPH-1930 • TRACKING LIVE</Popup>
            </Marker>

            <Marker position={[22.9521, 86.2911]} icon={yellowIcon}>
              <Popup>BDPH-2001 • OBSERVATION</Popup>
            </Marker>

            <Marker position={[22.9821, 86.3211]} icon={greenIcon}>
              <Popup>BDPH-2109 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.6321, 86.1111]} icon={greenIcon}>
              <Popup>BDPH-2210 • ONLINE</Popup>
            </Marker>

            <Marker position={[22.6121, 86.3411]} icon={redIcon}>
              <Popup>BDPH-2301 • SECURITY ALERT</Popup>
            </Marker>

            <Marker position={[22.9921, 86.1411]} icon={greenIcon}>
              <Popup>BDPH-2411 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.7021, 86.3611]} icon={yellowIcon}>
              <Popup>BDPH-2511 • LOW VOLTAGE</Popup>
            </Marker>

            <Marker position={[22.7421, 86.4011]} icon={greenIcon}>
              <Popup>BDPH-2604 • MOVING</Popup>
            </Marker>

            <Marker position={[22.8321, 86.3911]} icon={greenIcon}>
              <Popup>BDPH-2710 • RUNNING</Popup>
            </Marker>

            <Marker position={[22.9221, 86.3711]} icon={redIcon}>
              <Popup>BDPH-2811 • GPS SIGNAL LOST</Popup>
            </Marker>

            <Marker position={[22.5621, 86.1811]} icon={greenIcon}>
              <Popup>BDPH-2910 • ACTIVE</Popup>
            </Marker>

            <Marker position={[22.5421, 86.2911]} icon={yellowIcon}>
              <Popup>BDPH-3011 • CHECK REQUIRED</Popup>
            </Marker>

            <Marker position={[22.5221, 86.3511]} icon={greenIcon}>
              <Popup>BDPH-3110 • LIVE TRACKING</Popup>
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
