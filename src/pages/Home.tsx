import AnalyticsCharts from "../components/AnalyticsCharts";
import Navbar from "../components/Navbar";
import ControlPanel from "../components/ControlPanel";
import LiveMap from "../components/LiveMap";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

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
const [activeTab, setActiveTab] = useState("Overview");
  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  };

      const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = () => {
  if (
    !formData.name ||
    !formData.email ||
    !formData.message
  ) {
    alert("Please fill all required fields");
    return;
  }

  console.log("Form Submitted:", formData);

  setSuccessMessage(
    "Thank you! Your enquiry has been submitted successfully."
  );

  setFormData({
    name: "",
    email: "",
    company: "",
    message: "",
  });
};

return (
  <div
    className="min-h-screen bg-[#030712] text-white overflow-x-hidden relative"
    onMouseMove={handleMouseMove}
  >
      
      
      {/* CURSOR GLOW */}
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

      {/* HERO */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-black"></div>

        <div className="absolute inset-0 opacity-20">

          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[140px]"></div>

          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px]"></div>

          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

        </div>

        {/* FLOATING CARD LEFT */}
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

        {/* FLOATING CARD RIGHT */}
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
            <span className="text-cyan-400">
              {" "}
              AI ENTERPRISE{" "}
            </span>
            INTELLIGENCE

          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">

            Advanced GPS tracking, fleet monitoring,
            realtime analytics, AI-powered enterprise
            automation and intelligent cloud systems.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition">
              Explore Platform
            </button>

            <a
              href="#dashboard"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-500 hover:text-black transition"
            >
              Live Dashboard
            </a>

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
      <section
        id="services"
        className="py-24 px-6"
      >

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

      {/* PREMIUM DASHBOARD */}
      <section
        id="dashboard"
        className="relative py-32 px-6 bg-black overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

        <div className="max-w-[1600px] mx-auto relative z-10">

          <div className="text-center mb-20">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >

              LIVE{" "}
              <span className="text-cyan-400">
                ENTERPRISE
              </span>{" "}
              DASHBOARD

            </motion.h2>

            <p className="text-gray-400 text-xl max-w-4xl mx-auto">

              AI-powered enterprise monitoring system with realtime
              fleet intelligence and predictive analytics.

            </p>

          </div>

          <div className="grid xl:grid-cols-[320px_1fr] gap-8">

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] border border-cyan-500/20 bg-[#08111f]/80 backdrop-blur-2xl p-8"
            >

              <div className="text-4xl font-black text-cyan-400 mb-10">
                BDPH AI
              </div>

              <div className="space-y-4">

                {[
  "Overview",
  "Fleet Tracking",
  "Battery AI",
  "Fuel Analytics",
  "AI Monitoring",
  "Security Layer",
  "Cloud Sync",
  "Settings",
].map((item) => (

                  <motion.div
  key={item}
  whileHover={{ x: 8 }}
  onClick={() => setActiveTab(item)}
  className={rounded-2xl px-6 py-5 cursor-pointer transition-all
    ${
      activeTab === item
        ? "bg-cyan-500/10 border border-cyan-400/30"
        : "bg-[#0b1220] border border-cyan-500/10"
    }
  }
>
  <div className="text-white font-semibold text-lg">
    {item}
  </div>
</motion.div>
           

            {/* MAIN PANEL */}
            <div className="space-y-8">

              {/* STATS */}
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                {[
                  {
                    title: "Vehicles Online",
                    value: "128",
                    growth: "+12%",
                  },
                  {
                    title: "Fuel Efficiency",
                    value: "94%",
                    growth: "+8%",
                  },
                  {
                    title: "Battery Health",
                    value: "99%",
                    growth: "+3%",
                  },
                  {
                    title: "AI Alerts",
                    value: "12",
                    growth: "-2%",
                  },
                ].map((card, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-[30px] border border-cyan-500/20 bg-gradient-to-br from-[#08111f] to-[#020617] p-8"
                  >

                    <div className="text-gray-400 text-lg mb-4">
                      {card.title}
                    </div>

                    <div className="text-6xl font-black text-cyan-400">
                      {card.value}
                    </div>

                    <div className="mt-4 text-green-400 font-semibold">
                      ▲ {card.growth}
                    </div>

                  </motion.div>

                ))}

                         </div>

             {/* DASHBOARD CONTENT */}

{activeTab === "Overview" && (

  <div className="grid lg:grid-cols-2 gap-8">

    <div className="bg-[#08111f] border border-cyan-500/20 rounded-[30px] p-8">

      <h3 className="text-2xl font-bold text-cyan-400 mb-8">
        Fuel Consumption Analysis
      </h3>

      <div className="space-y-5">

        {[78, 64, 88, 71, 93].map((v, i) => (

          <div key={i}>

            <div className="flex justify-between mb-2 text-gray-300">
              <span>Day {i + 1}</span>
              <span>{v}%</span>
            </div>

            <div className="h-4 bg-[#020617] rounded-full overflow-hidden">

              <div
                className="h-full bg-cyan-400"
                style={{ width: ${v}% }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

    <div className="bg-[#08111f] border border-cyan-500/20 rounded-[30px] p-8">

      <h3 className="text-2xl font-bold text-cyan-400 mb-8">
        Fleet Activity
      </h3>

      <div className="flex items-end justify-between h-[300px] gap-4">

        {[40, 80, 65, 95, 55, 100, 72].map((h, i) => (

          <div
            key={i}
            className="flex-1 bg-cyan-400 rounded-t-2xl"
            style={{ height: ${h}% }}
          />

        ))}

      </div>

    </div>

  </div>

)}

{activeTab === "Fleet Tracking" && (

  <div className="bg-[#08111f] border border-cyan-500/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-cyan-400 mb-8">
      Fleet Tracking
    </h3>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-[#020617] p-6 rounded-2xl">
        <div className="text-gray-400">Running</div>
        <div className="text-5xl font-bold text-green-400">182</div>
      </div>

      <div className="bg-[#020617] p-6 rounded-2xl">
        <div className="text-gray-400">Idle</div>
        <div className="text-5xl font-bold text-yellow-400">41</div>
      </div>

      <div className="bg-[#020617] p-6 rounded-2xl">
        <div className="text-gray-400">Stopped</div>
        <div className="text-5xl font-bold text-red-400">19</div>
      </div>

      <div className="bg-[#020617] p-6 rounded-2xl">
        <div className="text-gray-400">Offline</div>
        <div className="text-5xl font-bold text-gray-400">6</div>
      </div>

    </div>

  </div>

)}

{activeTab === "Battery AI" && (

  <div className="bg-[#08111f] border border-cyan-500/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-cyan-400 mb-8">
      Battery Intelligence
    </h3>

    <div className="grid md:grid-cols-4 gap-6">

      {["94%", "81%", "72%", "88%"].map((v, i) => (

        <div
          key={i}
          className="bg-[#020617] rounded-2xl p-8 text-center"
        >

          <div className="text-gray-400 mb-4">
            Fleet {i + 1}
          </div>

          <div className="text-5xl font-bold text-cyan-400">
            {v}
          </div>

        </div>

      ))}

    </div>

  </div>

)}

{activeTab === "Settings" && (

  <div className="bg-[#08111f] border border-cyan-500/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-cyan-400 mb-8">
      Settings
    </h3>

    <div className="space-y-5">

      <div className="bg-[#020617] p-5 rounded-2xl">
        Company Name: BDPH GROUP
      </div>

      <div className="bg-[#020617] p-5 rounded-2xl">
        Notifications: Enabled
      </div>

      <div className="bg-[#020617] p-5 rounded-2xl">
        GPS Provider: Active
      </div>

      <div className="bg-[#020617] p-5 rounded-2xl">
        Cloud Sync: Connected
      </div>

    </div>

  </div>

)}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="py-24 px-6"
      >

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

      {/* CONTACT SECTION HERE */}


    {/* ABOUT */}
<section
  id="about"
  className="py-32 px-6 bg-[#020617]"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <h2 className="text-5xl md:text-7xl font-black mb-6">
        ABOUT{" "}
        <span className="text-cyan-400">
          BDPH GROUP
        </span>
      </h2>

      <p className="text-xl text-gray-400 max-w-4xl mx-auto">
        BDPH Group is developing intelligent enterprise solutions for
        transporters, fleet operators, logistics companies and industrial
        businesses. Our platform integrates GPS tracking, fuel monitoring,
        fleet intelligence, AI analytics and enterprise automation into a
        single ecosystem.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 text-4xl mb-6">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Mission
        </h3>

        <p className="text-gray-400">
          To simplify transporter operations through intelligent
          automation, AI-driven monitoring and centralized fleet
          management.
        </p>
      </div>

      <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 text-4xl mb-6">
          🚀
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Vision
        </h3>

        <p className="text-gray-400">
          To become India's leading AI-powered enterprise and fleet
          intelligence platform for transport and logistics industries.
        </p>
      </div>

      <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">
        <div className="text-cyan-400 text-4xl mb-6">
          ⚡
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Solutions
        </h3>

        <p className="text-gray-400">
          GPS tracking, fuel management, compliance monitoring,
          document alerts, AI analytics and enterprise automation.
        </p>
      </div>

    </div>

  </div>
</section>
     {/* ENHANCED AI CONTACT SECTION */}
<section
  id="contact"
  className="relative py-32 px-6 bg-black overflow-hidden"
>

  {/* BACKGROUND FX */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2" />

  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* TITLE */}
    <div className="text-center mb-24">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-black mb-6"
      >

        CONTACT{" "}
        <span className="text-cyan-400">
          BDPH AI
        </span>

      </motion.h2>

      <p className="text-gray-400 text-xl max-w-4xl mx-auto">

        Connect with our AI enterprise intelligence team for
        realtime fleet systems, GPS monitoring, cloud analytics,
        predictive automation and enterprise infrastructure solutions.

      </p>

    </div>

    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >

        {/* COMPANY CARD */}
        <div className="rounded-[32px] border border-cyan-500/20 bg-[#08111f]/80 backdrop-blur-2xl p-10 shadow-[0_0_50px_rgba(0,255,255,0.08)]">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl">
              🚀
            </div>

            <div>

              <div className="text-4xl font-black text-cyan-400">
                BDPH GROUP
              </div>

              <div className="text-gray-500 mt-2">
                Enterprise AI Intelligence Platform
              </div>

            </div>

          </div>

          <div className="space-y-8">

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                📍
              </div>

              <div>

                <div className="text-xl font-semibold text-white mb-1">
                  Corporate Office
                </div>

                <div className="text-gray-400">
                  Bhagalpur, Bihar, India
                </div>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                📞
              </div>

              <div>

                <div className="text-xl font-semibold text-white mb-1">
                  Contact Number
                </div>

                <div className="text-gray-400">
                  +91 9122221684
                </div>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                ✉️
              </div>

              <div>

                <div className="text-xl font-semibold text-white mb-1">
                  Email Address
                </div>

                <div className="text-gray-400">
                  info@bdphgroup.com
                </div>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                🌐
              </div>

              <div>

                <div className="text-xl font-semibold text-white mb-1">
                  Website
                </div>

                <div className="text-gray-400">
                  www.bdphgroup.com
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* AI STATUS CARD */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-8"
        >

          <div className="flex items-center justify-between mb-8">

            <div>

              <div className="text-3xl font-black text-cyan-400 mb-2">
                AI SYSTEM STATUS
              </div>

              <div className="text-gray-400">
                Enterprise cloud intelligence active
              </div>

            </div>

            <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse"></div>

          </div>

          <div className="space-y-5">

            {[
              "Realtime GPS Monitoring",
              "Fleet Intelligence Active",
              "Cloud Synchronization Stable",
              "AI Prediction Engine Running",
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-center justify-between border-b border-cyan-500/10 pb-4"
              >

                <div className="text-white">
                  {item}
                </div>

                <div className="text-green-400 font-semibold">
                  ACTIVE
                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-[36px] border border-cyan-500/20 bg-[#08111f]/80 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
      >

        <div className="mb-10">

          <div className="text-5xl font-black text-cyan-400 mb-4">
            Send Enquiry
          </div>

          <div className="text-gray-400 text-lg">
            Connect directly with our AI enterprise team.
          </div>

        </div>

        <div className="space-y-6">
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleInputChange}
  placeholder="Full Name"
  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
/>

         <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  placeholder="Email Address"
  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
/>

         <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleInputChange}
  placeholder="Company Name"
  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
/>
        

         <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleInputChange}
  placeholder="Describe your enterprise requirement..."
  className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition resize-none"
          />

          <motion.button
  onClick={handleSubmit}
  whileHover={{
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg py-5 rounded-2xl transition shadow-[0_0_30px_rgba(0,255,255,0.35)]"
>
  Launch AI Enquiry
</motion.button>
          {successMessage && (
  <div className="mt-4 text-center text-green-400 font-semibold">
    {successMessage}
  </div>
)}

        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-3 gap-5 mt-10">

          {[
            {
              title: "Clients",
              value: "250+",
            },
            {
              title: "AI Accuracy",
              value: "99%",
            },
            {
              title: "Support",
              value: "24/7",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="rounded-2xl bg-cyan-500/5 border border-cyan-500/10 p-5 text-center"
            >

              <div className="text-3xl font-black text-cyan-400 mb-2">
                {item.value}
              </div>

              <div className="text-gray-500 text-sm">
                {item.title}
              </div>

            </div>

          ))}

        </div>

      </motion.div>

    </div>

    {/* FOOTER */}
    <div className="mt-24 pt-10 border-t border-cyan-500/10 text-center">

      <div className="text-gray-500 text-lg">
        © 2026 BDPH GROUP — AI Fleet Intelligence Platform
      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;
