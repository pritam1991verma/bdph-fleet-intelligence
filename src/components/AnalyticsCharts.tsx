import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const fuelData = [
  { day: "Mon", fuel: 78 },
  { day: "Tue", fuel: 74 },
  { day: "Wed", fuel: 69 },
  { day: "Thu", fuel: 80 },
  { day: "Fri", fuel: 66 },
  { day: "Sat", fuel: 88 },
];

const vehicleData = [
  { time: "6AM", active: 22 },
  { time: "9AM", active: 48 },
  { time: "12PM", active: 80 },
  { time: "3PM", active: 62 },
  { time: "6PM", active: 91 },
  { time: "9PM", active: 44 },
];

const batteryData = [
  { name: "Fleet A", health: 92 },
  { name: "Fleet B", health: 81 },
  { name: "Fleet C", health: 74 },
  { name: "Fleet D", health: 88 },
];

function AnalyticsCharts() {
  return (
    <section className="py-24 px-6 bg-[#020617]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            AI Analytics Intelligence
          </h2>

          <p className="text-gray-400 text-xl">
            Enterprise realtime monitoring and predictive analytics.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FUEL CHART */}

          <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Fuel Efficiency Analytics
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <AreaChart data={fuelData}>

                <CartesianGrid strokeDasharray="3 3" stroke="#164e63" />

                <XAxis dataKey="day" stroke="#94a3b8" />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="fuel"
                  stroke="#22d3ee"
                  fill="#0891b2"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

          {/* VEHICLE CHART */}

          <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Vehicle Activity Monitoring
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={vehicleData}>

                <CartesianGrid strokeDasharray="3 3" stroke="#164e63" />

                <XAxis dataKey="time" stroke="#94a3b8" />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="active"
                  stroke="#22d3ee"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* BATTERY CHART */}

          <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8 lg:col-span-2">

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Battery Health Intelligence
            </h3>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={batteryData}>

                <CartesianGrid strokeDasharray="3 3" stroke="#164e63" />

                <XAxis dataKey="name" stroke="#94a3b8" />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Bar
                  dataKey="health"
                  fill="#06b6d4"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AnalyticsCharts;
