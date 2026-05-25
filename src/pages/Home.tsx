import Navbar from "../components/Navbar";
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

      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">

            FUTURE OF
            <span className="text-cyan-400"> TECHNOLOGY </span>
            & ENTERPRISE SOLUTIONS

          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">

            BDPH Group delivers intelligent enterprise solutions including
            GPS tracking, realtime monitoring, fuel intelligence,
            battery analytics and enterprise automation.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition">
              Explore Services
            </button>

            <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-500 hover:text-black transition">
              Live Demo
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

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Enterprise Services
            </h2>

            <p className="text-gray-400 text-lg">
              Smart enterprise intelligence systems.
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
                  Advanced enterprise analytics and realtime monitoring system.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* DASHBOARD */}

      <section className="py-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Live Monitoring Dashboard
            </h2>

            <p className="text-gray-400">
              Realtime enterprise analytics system.
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

      {/* DOCUMENTS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Smart Document Monitoring
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

      {/* LIVE MAP SECTION */}

      <section className="py-24 px-6 bg-[#020617]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Enterprise GPS Intelligence
            </h2>

            <p className="text-gray-400 text-lg">
              Live realtime tracking and satellite monitoring.
            </p>

          </div>

          <div className="relative h-[600px] bg-[#08111f] border border-cyan-500/20 rounded-3xl overflow-hidden">

            {/* GRID */}

            <div className="absolute inset-0 opacity-20">

              <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d420_1px,transparent_1px),linear-gradient(to_bottom,#06b6d420_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            </div>

            {/* TRACKING POINTS */}

            <div className="absolute top-20 left-20 w-5 h-5 bg-green-400 rounded-full animate-ping"></div>

            <div className="absolute top-40 right-32 w-5 h-5 bg-red-400 rounded-full animate-ping"></div>

            <div className="absolute bottom-24 left-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>

            <div className="absolute bottom-16 right-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-ping"></div>

            {/* CENTER */}

            <div className="relative z-10 h-full flex items-center justify-center">

              <div className="text-center">

                <div className="text-6xl mb-6">
                  🌍
                </div>

                <h3 className="text-4xl font-bold text-cyan-400 mb-6 tracking-widest">
                  GLOBAL TRACKING NETWORK
                </h3>

                <p className="text-gray-400 max-w-2xl">
                  AI-powered enterprise vehicle intelligence system with realtime
                  monitoring, fleet tracking and predictive analytics.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
