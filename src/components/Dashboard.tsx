import { motion } from "framer-motion";

function Dashboard() {
  return (

    <section className="py-24 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* SIDEBAR */}

          <div className="w-full lg:w-[260px] bg-[#08111f] border border-cyan-500/20 rounded-3xl p-6">

            <h2 className="text-2xl font-bold text-cyan-400 mb-10">
              BDPH AI
            </h2>

            <div className="space-y-4">

              {[
                "Overview",
                "Live Tracking",
                "Battery AI",
                "Fuel Analytics",
                "Documents",
                "Alerts",
                "Users",
                "Settings",
              ].map((item, index) => (

                <div
                  key={index}
                  className="px-4 py-4 rounded-2xl bg-[#0f172a] hover:bg-cyan-500 hover:text-black transition cursor-pointer"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* MAIN PANEL */}

          <div className="flex-1 space-y-8">

            {/* TOP CARDS */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

              {[
                {
                  title: "Vehicles Online",
                  value: "128",
                },
                {
                  title: "Fuel Usage",
                  value: "78%",
                },
                {
                  title: "Battery Health",
                  value: "96%",
                },
                {
                  title: "AI Alerts",
                  value: "12",
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

            {/* ANALYTICS */}

            <div className="grid lg:grid-cols-2 gap-8">

              <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8 h-[350px]">

                <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                  Fuel Analytics
                </h3>

                <div className="h-[220px] flex items-end gap-4">

                  {[40, 80, 55, 95, 70, 110, 90].map((height, index) => (

                    <div
                      key={index}
                      className="flex-1 bg-cyan-400 rounded-t-xl"
                      style={{
                        height: `${height}%`,
                      }}
                    ></div>

                  ))}

                </div>

              </div>

              <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8 h-[350px]">

                <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                  AI Monitoring
                </h3>

                <div className="space-y-6">

                  {[
                    "GPS systems operational",
                    "Battery systems stable",
                    "Realtime tracking active",
                    "No critical alerts detected",
                  ].map((status, index) => (

                    <div
                      key={index}
                      className="bg-[#0f172a] border border-cyan-500/10 rounded-2xl px-6 py-5 flex items-center justify-between"
                    >

                      <span>{status}</span>

                      <span className="text-green-400">
                        ACTIVE
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Dashboard;
