import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Polyline,
} from "react-leaflet";

import { divIcon } from "leaflet";
import { useEffect } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* =========================
   CUSTOM CYBER ICONS
========================= */

const greenIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-10 h-10 bg-green-400 rounded-full opacity-20 animate-ping"></div>
      <div class="relative w-5 h-5 bg-green-400 border-2 border-white rounded-full shadow-[0_0_20px_rgba(74,222,128,0.9)]"></div>
    </div>
  `,
  iconSize: [40, 40],
});

const redIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-10 h-10 bg-red-500 rounded-full opacity-20 animate-ping"></div>
      <div class="relative w-5 h-5 bg-red-500 border-2 border-white rounded-full shadow-[0_0_20px_rgba(239,68,68,0.9)]"></div>
    </div>
  `,
  iconSize: [40, 40],
});

const yellowIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-10 h-10 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
      <div class="relative w-5 h-5 bg-yellow-400 border-2 border-white rounded-full shadow-[0_0_20px_rgba(250,204,21,0.9)]"></div>
    </div>
  `,
  iconSize: [40, 40],
});

/* =========================
   LIVE MAP
========================= */

function LiveMap() {
  useEffect(() => {
    L.Icon.Default.mergeOptions({});
  }, []);

  return (
    <section
      id="tracking"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl mb-8">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
              AI Satellite Monitoring System
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent">
              Live Fleet Intelligence
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Enterprise-grade AI powered satellite tracking with realtime
            vehicle telemetry, predictive monitoring and global route
            intelligence.
          </p>
        </div>

        {/* MAP WRAPPER */}

        <div className="relative rounded-[32px] overflow-hidden border border-cyan-500/20 bg-black shadow-[0_0_100px_rgba(34,211,238,0.18)]">
          {/* CYBER GRID */}

          <div className="absolute inset-0 cyber-grid opacity-20 z-[200] pointer-events-none"></div>

          {/* RADAR SWEEP */}

          <div className="absolute inset-0 pointer-events-none z-[300] overflow-hidden">
            <div className="radar-sweep"></div>
          </div>

          {/* HUD CORNERS */}

          <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-cyan-400 z-[500]" />

          <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-cyan-400 z-[500]" />

          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-cyan-400 z-[500]" />

          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-cyan-400 z-[500]" />

          {/* LIVE STATUS PANEL */}

          <div className="absolute top-6 left-6 z-[600] backdrop-blur-2xl bg-black/50 border border-cyan-500/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <span className="text-green-400 text-sm tracking-[0.3em] font-bold uppercase">
                Live Network
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Vehicles Online</span>

                <span className="text-white font-bold">248</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">AI Alerts</span>

                <span className="text-red-400 font-bold">12</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Satellites Linked</span>

                <span className="text-cyan-400 font-bold">16</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Coverage</span>

                <span className="text-green-400 font-bold">99.98%</span>
              </div>
            </div>
          </div>

          {/* MAP */}

          <div className="relative w-full h-[780px] z-0">

  <MapContainer
    center={[22.8046, 86.2029]}
    zoom={11}
    scrollWheelZoom={true}
    className="w-full h-full"
  
          >
            {/* SATELLITE TILE */}

            <TileLayer
              attribution="&copy; Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* LIVE ROUTES */}

            <Polyline
              positions={[
                [22.8046, 86.2029],
                [22.8246, 86.1829],
                [22.8421, 86.2311],
              ]}
              pathOptions={{
                color: "#22d3ee",
                weight: 4,
                opacity: 0.9,
                dashArray: "10, 10",
              }}
            />

            <Polyline
              positions={[
                [22.7521, 86.2411],
                [22.7921, 86.2711],
                [22.8321, 86.3911],
              ]}
              pathOptions={{
                color: "#22c55e",
                weight: 3,
                opacity: 0.8,
                dashArray: "12, 12",
              }}
            />

            {/* VEHICLES */}

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

            {/* LIVE ZONES */}

            <CircleMarker
              center={[22.8046, 86.2029]}
              radius={60}
              pathOptions={{
                color: "#22c55e",
                fillColor: "#22c55e",
                fillOpacity: 0.15,
                weight: 2,
              }}
            />

            <CircleMarker
              center={[22.8246, 86.1829]}
              radius={50}
              pathOptions={{
                color: "#ef4444",
                fillColor: "#ef4444",
                fillOpacity: 0.15,
                weight: 2,
              }}
            />
          </MapContainer>
            </div>

          {/* BOTTOM TELEMETRY */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[600]">
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="backdrop-blur-xl bg-black/50 border border-cyan-500/20 rounded-2xl px-5 py-3">
                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  Active Vehicles
                </div>

                <div className="text-2xl font-bold text-white">248</div>
              </div>

              <div className="backdrop-blur-xl bg-black/50 border border-cyan-500/20 rounded-2xl px-5 py-3">
                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  Network Health
                </div>

                <div className="text-2xl font-bold text-green-400">
                  Stable
                </div>
              </div>

              <div className="backdrop-blur-xl bg-black/50 border border-cyan-500/20 rounded-2xl px-5 py-3">
                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  AI Monitoring
                </div>

                <div className="text-2xl font-bold text-cyan-400">
                  Enabled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveMap;
