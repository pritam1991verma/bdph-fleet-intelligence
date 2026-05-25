import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Set default icon globally for all markers
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  tooltipAnchor: [16, -28],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LiveMap() {
  useEffect(() => {
    // Ensure Leaflet's default icon is set
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Live GPS Tracking
          </h2>
          <p className="text-gray-400 text-lg">
            Realtime fleet intelligence monitoring system.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20">
          <MapContainer
            center={[22.8046, 86.2029]}
            zoom={12}
            scrollWheelZoom={true}
            className="h-[600px] w-full"
          >
            <TileLayer
              attribution="BDPH"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* VEHICLE 1 */}
            <Marker position={[22.8046, 86.2029]} icon={DefaultIcon}>
              <Popup>
                Vehicle BDPH-1021 <br />
                Status: ACTIVE
              </Popup>
            </Marker>

            {/* VEHICLE 2 */}
            <Marker position={[22.8246, 86.1829]} icon={DefaultIcon}>
              <Popup>
                Vehicle BDPH-2044 <br />
                Fuel Low Alert
              </Popup>
            </Marker>

            {/* VEHICLE 3 */}
            <Marker position={[22.7846, 86.2229]} icon={DefaultIcon}>
              <Popup>
                Vehicle BDPH-3301 <br />
                Battery Stable
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default LiveMap;
