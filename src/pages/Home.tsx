import AnalyticsCharts from "../components/AnalyticsCharts";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ControlPanel from "../components/ControlPanel";
import LiveMap from "../components/LiveMap";

import { motion } from "framer-motion";

import {
  Satellite,
  Radar,
  BatteryCharging,
  ShieldCheck,
  Map,
  FileWarning,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}

<section
  id="home"
  className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
>

  {/* BACKGROUND EFFECTS */}

  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-black"></div>

  <div className="absolute inset-0 opacity-20">

    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[140px]"></div>

    <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px]"></div>

    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

  </div>

  {/* FLOATING STATS */}

  <div className="absolute top-[25%] left-10 hidden xl:block z-20">

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="bg-[#08111f]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 w-64 shadow-2xl"
    >

      <div className="text-gray-400 text-sm mb-2">
        Active Vehicles
      </div>

      <div className="text-5xl font-bold text-cyan-400">
        128
      </div>

      <div className="mt-4 text-green-400 text-sm">
        ▲ 12% realtime increase
      </div>

    </motion.div>

  </div>

  <div className="absolute top-[45%] right-10 hidden xl:block z-20">

    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="bg-[#08111f]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 w-64 shadow-2xl"
    >

      <div className="text-gray-400 text-sm mb-2">
        AI Monitoring Status
      </div>

      <div className="text-4xl font-bold text-cyan-400">
        99.9%
      </div>

      <div className="mt-4 text-cyan-300 text-sm">
        System uptime stable
      </div>

    </motion.div>

  </div>

  {/* MAIN HERO */}

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10"
  >

    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">

      FUTURE OF
      <span className="text-cyan-400"> AI ENTERPRISE </span>
      INTELLIGENCE

    </h1>

    <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">

      Advanced GPS tracking, fleet monitoring, realtime analytics,
      AI-powered enterprise automation and intelligent cloud systems.

    </p>

    <div className="flex flex-wrap justify-center gap-6">

      <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition">
        Explore Platform
      </button>

      <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-500 hover:text-black transition">
        Live Dashboard
      </button>

    </div>

    {/* ORBIT UI */}

    <div className="mt-24 flex justify-center relative">

      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 animate-ping"></div>

      <div className="absolute w-[400px] h-[400px] rounded-full border border-cyan-500/20 animate-pulse"></div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="relative w-[300px] h-[300px] border border-cyan-500/30 rounded-full flex items-center justify-center"
      >

        <div className="absolute w-[200px] h-[200px] border border-cyan-500/20 rounded-full"></div>

        <div className="absolute w-[120px] h-[120px] border border-cyan-500/20 rounded-full"></div>

        <div className="w-10 h-10 bg-cyan-400 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.9)]"></div>

        <div className="absolute left-0 top-10 text-cyan-400 text-xs flex gap-2 items-center">
          <Satellite size={14} />
          LIVE SATELLITE
        </div>

        <div className="absolute bottom-6 right-6 text-purple-400 text-xs flex gap-2 items-center">
          <Radar size={14} />
          SCANNING
        </div>

      </motion.div>

    </div>

  </motion.div>

</section>
      {/* SERVICES */}

      <section id="services" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Enterprise Services
            </h2>

            <p className="text-gray-400 text-lg">
              Intelligent enterprise monitoring systems.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "GPS Vehicle Tracking",
              "Fuel Monitoring",
              "Battery Intelligence",
              "Realtime Dashboard",
              "Cloud Monitoring",
              "AI Automation",
            ].map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0b1120] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400 text-2xl">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400">
                  Enterprise-grade realtime analytics and monitoring systems.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* DASHBOARD */}

      <section id="dashboard" className="py-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Live Monitoring Dashboard
            </h2>

            <p className="text-gray-400">
              Enterprise realtime intelligence systems.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                title: "Active Vehicles",
                value: "128",
              },
              {
                title: "Fuel Efficiency",
                value: "94%",
              },
              {
                title: "System Uptime",
                value: "99.9%",
              },
            ].map((card, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-10"
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

        </div>

      </section>

      <Dashboard />

      {/* ANALYTICS */}

      <section id="analytics" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Smart Monitoring System
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Pollution",
                status: "12 Expiring",
                icon: <FileWarning size={36} />,
              },
              {
                title: "Insurance",
                status: "48 Active",
                icon: <ShieldCheck size={36} />,
              },
              {
                title: "Battery",
                status: "Realtime AI",
                icon: <BatteryCharging size={36} />,
              },
              {
                title: "GPS Maps",
                status: "Live Tracking",
                icon: <Map size={36} />,
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition"
              >

                <div className="text-cyan-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {item.title}
                </h3>

                <div className="text-xl text-gray-300">
                  {item.status}
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <ControlPanel />

      <AnalyticsCharts />

      <LiveMap />

      {/* ABOUT */}

      <section id="about" className="py-24 px-6 bg-[#020617]">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-cyan-400 mb-8">
            About BDPH Group
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed">

            BDPH Group is an AI-driven enterprise technology company delivering
            advanced GPS intelligence, realtime fleet monitoring,
            predictive analytics and intelligent automation solutions.

          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="py-24 px-6 bg-black border-t border-cyan-500/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-6">
              Contact BDPH Group
            </h2>

            <p className="text-gray-400 text-xl">
              Enterprise AI Solutions & Fleet Intelligence Platform
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="space-y-8">

              <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

                <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                  Corporate Office
                </h3>

                <div className="space-y-4 text-gray-300 text-lg">

                  <p>📍 Bhagalpur, Bihar, India</p>

                  <p>📞 +91 9122221684</p>

                  <p>✉️ info@bdphgroup.com</p>

                  <p>🌐 www.bdphgroup.com</p>

                </div>

              </div>

            </div>

            <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-10">

              <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                Send Enquiry
              </h3>

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
                />

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition">
                  Submit Enquiry
                </button>

              </div>

            </div>

          </div>

          <div className="mt-20 pt-10 border-t border-cyan-500/10 text-center text-gray-500">
            © 2026 BDPH GROUP — AI Fleet Intelligence Platform
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
