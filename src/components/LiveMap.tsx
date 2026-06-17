import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Polyline,
} from "react-leaflet";

import { divIcon } from "leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* =========================
   CUSTOM CYBER ICONS
========================= */

const greenIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-14 h-14 rounded-full border border-green-400/40 animate-ping"></div>
      <div class="absolute w-10 h-10 rounded-full border border-green-400/20 animate-pulse"></div>
      <div class="relative w-5 h-5 bg-green-400 border-2 border-white rounded-full shadow-[0_0_25px_rgba(74,222,128,1)]"></div>
    </div>
  `,
  iconSize: [40, 40],
});

const redIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-14 h-14 rounded-full border border-red-400/40 animate-ping"></div>
      <div class="absolute w-10 h-10 rounded-full border border-red-400/20 animate-pulse"></div>
      <div class="relative w-5 h-5 bg-red-500 border-2 border-white rounded-full shadow-[0_0_25px_rgba(239,68,68,1)]"></div>
    </div>
  `,
  iconSize: [40, 40],
});

const yellowIcon = divIcon({
  className: "",
  html: `
    <div class="relative flex items-center justify-center">
      <div class="absolute w-14 h-14 rounded-full border border-yellow-300/40 animate-ping"></div>
      <div class="absolute w-10 h-10 rounded-full border border-yellow-300/20 animate-pulse"></div>
      <div class="relative w-5 h-5 bg-yellow-400 border-2 border-white rounded-full shadow-[0_0_25px_rgba(250,204,21,1)]"></div>
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
const [searchVehicle, setSearchVehicle] = useState("");

const fleetStats = {
  running: 182,
  idle: 41,
  stopped: 19,
  offline: 6,
};

const alerts = [
  {
    vehicle: "BDPH-2044",
    location: "Dumka",
    issue: "Fuel Drop Detected",
    severity: "HIGH",
  },
  {
    vehicle: "BDPH-6619",
    location: "Kurwa",
    issue: "Engine Alert",
    severity: "MEDIUM",
  },
];
  return (
    <section
  id="tracking"
  className="relative py-12 md:py-16 overflow-hidden"
>
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-xl mb-8">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-[#0F4C81] uppercase tracking-[0.3em] text-sm font-semibold">
              Enterprise Fleet Command Center
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent">
              Live Fleet Operations
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Enterprise-grade AI powered satellite tracking with realtime
            vehicle telemetry, predictive monitoring and global route
            intelligence.
          </p>

          <div className="w-64 h-[2px] mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"></div>
        </div>

        {/* LIVE ALERT TICKER */}

        <div className="mb-8 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-slate-100/40 backdrop-blur-xl">

          <div className="animate-[ticker_25s_linear_infinite] whitespace-nowrap py-4 text-sm uppercase tracking-[0.35em] text-[#0F4C81]">

            AI MONITORING ACTIVE •
            SATELLITE LINK STABLE •
            BDPH-2044 FUEL ALERT DETECTED •
            LIVE GPS TRACKING ENABLED •
            ROUTE AI OPTIMIZATION ACTIVE •
            SECURITY NETWORK ONLINE •
            GLOBAL TELEMETRY CONNECTED •

          </div>

        </div>

        {/* MAP WRAPPER */}

        <div className="relative rounded-[32px] overflow-hidden border border-[#D4AF37]/20 bg-white shadow-2xl">

          {/* AI CORE GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)] z-[50] pointer-events-none"></div>

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 z-[100] pointer-events-none"></div>

          {/* CYBER GRID */}

          <div className="absolute inset-0 cyber-grid opacity-20 z-[200] pointer-events-none"></div>

          {/* SAT LINK */}

          <div className="absolute top-8 right-8 z-[700]">

            <div className="relative flex items-center justify-center">

              <div className="absolute w-24 h-24 rounded-full border border-cyan-400/20 animate-ping"></div>

              <div className="w-24 h-24 rounded-full border border-cyan-400/40 bg-slate-100/40 backdrop-blur-xl"></div>

              <span className="absolute text-[#0F4C81] text-xs tracking-[0.3em]">
                LIVE GPS
              </span>

            </div>

          </div>

          {/* LIVE STATUS PANEL */}

          <div className="absolute top-6 left-6 z-[700] backdrop-blur-2xl bg-white/95 border border-[#D4AF37]/30 rounded-3xl p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-bold uppercase">
                Live Network
              </span>

            </div>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Vehicles Online</span>
                <span className="text-slate-900 font-bold">248</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">AI Alerts</span>
                <span className="text-red-400 font-bold">12</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Satellites Linked</span>
                <span className="text-[#0F4C81] font-bold">16</span>
              </div>

              <div className="flex justify-between gap-12">
                <span className="text-gray-400">Coverage</span>
                <span className="text-[#D4AF37] font-bold">99.98%</span>
              </div>

            </div>

          </div>
          <div className="absolute top-[260px] left-6 z-[700]">

  <div className="backdrop-blur-2xl bg-white/95 border border-[#D4AF37]/30 rounded-3xl p-6">

    <div className="text-[#0F4C81] uppercase tracking-[0.3em] text-sm mb-5">
      Fleet Status
    </div>

    <div className="space-y-3">

      <div className="flex justify-between gap-12">
        <span className="text-[#D4AF37]">Running</span>
        <span className="text-slate-900">{fleetStats.running}</span>
      </div>

      <div className="flex justify-between gap-12">
        <span className="text-yellow-400">Idle</span>
        <span className="text-slate-900">{fleetStats.idle}</span>
      </div>

      <div className="flex justify-between gap-12">
        <span className="text-red-400">Stopped</span>
        <span className="text-slate-900">{fleetStats.stopped}</span>
      </div>

      <div className="flex justify-between gap-12">
        <span className="text-gray-400">Offline</span>
        <span className="text-slate-900">{fleetStats.offline}</span>
      </div>

    </div>

  </div>

</div>

          {/* REALTIME ANALYTICS */}

          <div className="absolute bottom-8 left-6 z-[700]">

            <div className="backdrop-blur-2xl bg-white/95 border border-[#D4AF37]/30 rounded-3xl p-5 shadow-xl">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                <span className="text-[#0F4C81] uppercase tracking-[0.3em] text-sm font-semibold">
                  Realtime Analytics
                </span>

              </div>

              <div className="space-y-5 min-w-[280px]">

                <div>

                  <div className="flex justify-between mb-2 text-xs uppercase tracking-widest">

                    <span className="text-gray-400">AI Processing</span>

                    <span className="text-[#0F4C81]">94%</span>

                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[94%] bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full animate-pulse"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2 text-xs uppercase tracking-widest">

                    <span className="text-gray-400">Satellite Signal</span>

                    <span className="text-[#D4AF37]">99%</span>

                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[99%] bg-gradient-to-r from-green-400 to-emerald-300 rounded-full animate-pulse"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2 text-xs uppercase tracking-widest">

                    <span className="text-gray-400">Network Security</span>

                    <span className="text-yellow-300">88%</span>

                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                    <div className="h-full w-[88%] bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-[430px] left-6 z-[700]">

  <div className="backdrop-blur-2xl bg-white/95 border border-red-500/20 rounded-3xl p-6 w-[280px]">

    <div className="text-red-400 uppercase tracking-[0.3em] text-sm mb-5">
      Critical Fleet Alerts
    </div>

    <div className="space-y-4">

      {alerts.map((alert, i) => (

        <div
          key={i}
          className="border border-red-500/10 rounded-2xl p-4"
        >

          <div className="font-bold text-slate-900">
            {alert.vehicle}
          </div>

          <div className="text-gray-400 text-sm">
            {alert.location}
          </div>

          <div className="text-red-400 mt-2">
            {alert.issue}
          </div>

        </div>

      ))}

    </div>

  </div>

</div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* HUD CORNERS */}

          <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-cyan-400 z-[500]" />

          <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-cyan-400 z-[500]" />

          <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-cyan-400 z-[500]" />

          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-cyan-400 z-[500]" />

         {/* MAP */}

<div className="relative w-full h-[850px] z-0">

  {/* VEHICLE SEARCH PANEL */}

  <div className="absolute top-6 right-[150px] z-[700]">

    <div className="bg-white/95 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-3xl p-5 w-[320px]">

      <div className="text-[#0F4C81] uppercase tracking-[0.3em] text-xs mb-3">
        Vehicle Search
      </div>

      <input
        type="text"
        value={searchVehicle}
        onChange={(e) => setSearchVehicle(e.target.value)}
        placeholder="Search Vehicle / Driver / Route"
        className="w-full bg-white border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-slate-900 outline-none"
      />

    </div>

  </div>

  <MapContainer
    center={[22.8046, 86.2029]}
    zoom={11}
    scrollWheelZoom={true}
    className="w-full h-full"
  >

    <TileLayer
      attribution="&copy; Esri"
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    />

    {/* ROUTES */}
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
<div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-[700]">

  <div className="grid md:grid-cols-2 gap-4">

    <div className="bg-white/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-5 w-[260px]">

      <div className="text-[#0F4C81] font-bold mb-3">
        Kurwa Siding
      </div>

      <div className="text-gray-300">
        Loaded Today: 86
      </div>

      <div className="text-gray-300">
        Waiting: 14
      </div>

      <div className="text-[#D4AF37]">
        Dispatched: 72
      </div>

    </div>

    <div className="bg-white/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl p-5 w-[260px]">

      <div className="text-[#0F4C81] font-bold mb-3">
        Dumka Siding
      </div>

      <div className="text-gray-300">
        Loaded Today: 61
      </div>

      <div className="text-gray-300">
        Waiting: 8
      </div>

      <div className="text-[#D4AF37]">
        Dispatched: 53
      </div>

    </div>

  </div>

</div>
          {/* BOTTOM TELEMETRY */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[700]">

            <div className="flex gap-4 flex-wrap justify-center">

              <div className="backdrop-blur-xl bg-white/95 border border-[#D4AF37]/30 rounded-2xl px-5 py-3">

                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  Active Vehicles
                </div>

                <div className="text-2xl font-bold text-slate-900">
                  248
                </div>

              </div>

              <div className="backdrop-blur-xl bg-white/95 border border-[#D4AF37]/30 rounded-2xl px-5 py-3">

                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  Network Health
                </div>

                <div className="text-2xl font-bold text-[#D4AF37]">
                  Stable
                </div>

              </div>

              <div className="backdrop-blur-xl bg-white/95 border border-[#D4AF37]/30 rounded-2xl px-5 py-3">

                <div className="text-gray-400 text-xs uppercase tracking-widest">
                  AI Monitoring
                </div>

                <div className="text-2xl font-bold text-[#0F4C81]">
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
