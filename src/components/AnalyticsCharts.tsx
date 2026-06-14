function AnalyticsCharts() {
  return (
    <section className="py-24 px-6 bg-slate-50">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-[#0F4C81] mb-6">
            Enterprise Analytics & Intelligence
          </h2>

          <p className="text-gray-400 text-xl">
            Enterprise realtime monitoring and predictive analytics.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FUEL */}

          <div className="bg-white shadow-xl border border-[#D4AF37]/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-10">
              Fuel Analytics
            </h3>

            <div className="space-y-6">

              {[
                { day: "Monday", value: "78%" },
                { day: "Tuesday", value: "64%" },
                { day: "Wednesday", value: "88%" },
                { day: "Thursday", value: "71%" },
                { day: "Friday", value: "93%" },
              ].map((item, index) => (

                <div key={index}>

                  <div className="flex justify-between mb-2 text-slate-600">

                    <span>{item.day}</span>

                    <span>{item.value}</span>

                  </div>

                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#D4AF37] rounded-full"
                      style={{ width: item.value }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* VEHICLE */}

          <div className="bg-white shadow-xl border border-[#D4AF37]/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-10">
              Vehicle Activity
            </h3>

            <div className="flex items-end justify-between h-[300px] gap-4">

              {[40, 80, 65, 95, 55, 100, 72].map((height, index) => (

                <div
                  key={index}
                  className="flex-1 bg-[#D4AF37] rounded-t-2xl hover:bg-[#0F4C81] transition"
                  style={{ height: `${height}%` }}
                ></div>

              ))}

            </div>

          </div>

          {/* BATTERY */}

          <div className="bg-white shadow-xl border border-[#D4AF37]/20 rounded-3xl p-8 lg:col-span-2">

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-10">
              Battery Intelligence
            </h3>

            <div className="grid md:grid-cols-4 gap-8">

              {[
                {
                  fleet: "Fleet A",
                  health: "94%",
                },
                {
                  fleet: "Fleet B",
                  health: "81%",
                },
                {
                  fleet: "Fleet C",
                  health: "72%",
                },
                {
                  fleet: "Fleet D",
                  health: "88%",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-slate-50 rounded-3xl p-8 border border-[#D4AF37]/20 text-center"
                >

                  <div className="text-gray-400 mb-4">
                    {item.fleet}
                  </div>

                  <div className="text-5xl font-bold text-[#0F4C81]">
                    {item.health}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AnalyticsCharts;
