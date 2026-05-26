import AnalyticsCharts from "../components/AnalyticsCharts";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ControlPanel from "../components/ControlPanel";
import LiveMap from "../components/LiveMap";

import { motion, useMotionValue, useSpring } from "framer-motion";

import {
  Satellite,
  Radar,
  BatteryCharging,
  ShieldCheck,
  Map,
  FileWarning,
} from "lucide-react";

function Home() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  };

  return (

    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#030712] text-white overflow-x-hidden grid-bg relative"
    >

      {/* MOUSE GLOW */}

      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] z-0"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <Navbar />

      {/* LIVE STATUS BAR */}

      <div className="relative z-40 mt-[76px] bg-[#08111f] border-b border-cyan-500/10 overflow-hidden">

        <div className="animate-[ticker_25s_linear_infinite] whitespace-nowrap py-3 text-sm text-cyan-300">

          <span className="mx-10">
            ● GPS NETWORK ACTIVE
          </span>

          <span className="mx-10">
            ● AI MONITORING ONLINE
          </span>

          <span className="mx-10">
            ● 128 VEHICLES TRACKED
          </span>

          <span className="mx-10">
            ● BATTERY SYSTEM STABLE
          </span>

          <span className="mx-10">
            ● CLOUD SERVERS HEALTHY
          </span>

          <span className="mx-10">
            ● LIVE SATELLITE CONNECTED
          </span>

          <span className="mx-10">
            ● ENTERPRISE SECURITY ACTIVE
          </span>

        </div>

      </div>

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

      <motion.section
        id="services"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Enterprise Services
            </h2>

          </div>

        </div>

      </motion.section>

      {/* DASHBOARD */}

      <motion.section
        id="dashboard"
        className="py-24 px-6 bg-black"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <Dashboard />

      </motion.section>

      {/* ANALYTICS */}

      <motion.section
        id="analytics"
        className="py-24 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <ControlPanel />

        <AnalyticsCharts />

      </motion.section>

      {/* LIVE MAP */}

      <motion.section
        id="tracking"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <LiveMap />

      </motion.section>

      {/* ABOUT */}

      <motion.section
        id="about"
        className="py-24 px-6 bg-[#020617]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

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

      </motion.section>

      {/* CONTACT */}

      <motion.section
        id="contact"
        className="py-24 px-6 bg-black border-t border-cyan-500/10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            Contact BDPH Group
          </h2>

          <p className="text-gray-400 text-xl mb-10">
            Enterprise AI Solutions & Fleet Intelligence Platform
          </p>

          <div className="mt-20 pt-10 border-t border-cyan-500/10 text-center text-gray-500">
            © 2026 BDPH GROUP — AI Fleet Intelligence Platform
          </div>

        </div>

      </motion.section>

    </div>
  );
}

export default Home;
