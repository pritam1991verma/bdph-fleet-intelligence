import { motion } from "framer-motion";

function ControlPanel() {
  return (

    <section className="py-24 px-6 bg-[#020617]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Enterprise Control Center
          </h2>

          <p className="text-gray-400 text-lg">
            AI-powered realtime operational intelligence.
          </p>

        </div>

        {/* TOP STATUS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {[
            {
              title: "Live Vehicles",
              value: "128",
            },
            {
              title: "Critical Alerts",
              value: "04",
            },
            {
              title: "Drivers Online",
              value: "52",
            },
            {
              title: "Tracking Accuracy",
              value: "99%",
            },
          ].map((card, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8"
            >

              <div className="text-gray-400 mb-4">
                {card.title}
              </div>

              <div className="text-5xl font-bold text-cyan-400">
                {card.value}
              </div>

            </motion.div>

          ))}

        </div>

        {/* LIVE TABLE */}

        <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl overflow-hidden mb-10">

          <div className="px-8 py-6 border-b border-cyan-500/10">

            <h3 className="text-2xl font-bold text-cyan-400">
              Live Fleet Monitoring
            </h3>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#0f172a]">

                <tr>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    Vehicle
                  </th>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    Driver
                  </th>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    Status
                  </th>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    Battery
                  </th>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    Fuel
                  </th>

                  <th className="text-left px-6 py-5 text-cyan-400">
                    GPS
                  </th>

                </tr>

              </thead>

              <tbody>

                {[
                  {
                    vehicle: "BDPH-1021",
                    driver: "Rahul Kumar",
                    status: "ACTIVE",
                    battery: "96%",
                    fuel: "78%",
                    gps: "ONLINE",
                  },
                  {
                    vehicle: "BDPH-2044",
                    driver: "Aman Singh",
                    status: "RUNNING",
                    battery: "88%",
                    fuel: "62%",
                    gps: "ONLINE",
                  },
                  {
                    vehicle: "BDPH-3301",
                    driver: "Ravi Das",
                    status: "IDLE",
                    battery: "72%",
                    fuel: "54%",
                    gps: "ACTIVE",
                  },
                ].map((row, index) => (

                  <tr
                    key={index}
                    className="border-t border-cyan-500/10 hover:bg-[#0f172a] transition"
                  >

                    <td className="px-6 py-5">
                      {row.vehicle}
                    </td>

                    <td className="px-6 py-5">
                      {row.driver}
                    </td>

                    <td className="px-6 py-5 text-green-400">
                      {row.status}
                    </td>

                    <td className="px-6 py-5">
                      {row.battery}
                    </td>

                    <td className="px-6 py-5">
                      {row.fuel}
                    </td>

                    <td className="px-6 py-5 text-cyan-400">
                      {row.gps}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* ALERT PANEL */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-[#08111f] border border-red-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-red-400 mb-8">
              Critical Alerts
            </h3>

            <div className="space-y-5">

              {[
                "Vehicle BDPH-2044 fuel level low",
                "Battery voltage fluctuation detected",
                "GPS signal unstable in Zone 4",
                "Document renewal pending",
              ].map((alert, index) => (

                <div
                  key={index}
                  className="bg-[#0f172a] border border-red-500/10 rounded-2xl px-6 py-5"
                >

                  {alert}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              AI Recommendations
            </h3>

            <div className="space-y-5">

              {[
                "Optimize fuel route for 12% efficiency gain",
                "Battery maintenance recommended",
                "AI detected driver idle patterns",
                "Realtime analytics operating normally",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#0f172a] border border-cyan-500/10 rounded-2xl px-6 py-5"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default ControlPanel;
