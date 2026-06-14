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
    className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-800 overflow-x-hidden relative"
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
      <div className="relative z-40 mt-[76px] bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-cyan-500/10 overflow-hidden">
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
<div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100"></div>

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
            className="bg-gradient-to-br from-white via-slate-50 to-blue-50/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-6 w-64 shadow-2xl"
          >

            <div className="text-slate-500 text-sm mb-2">
              Active Vehicles
            </div>

            <div className="text-5xl font-bold text-[#0F4C81]">
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
            className="bg-gradient-to-br from-white via-slate-50 to-blue-50/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-6 w-64 shadow-2xl"
          >

            <div className="text-slate-500 text-sm mb-2">
              AI Monitoring Status
            </div>

            <div className="text-4xl font-bold text-[#0F4C81]">
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

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-[#0F4C81]">

           AI-Powered Enterprise
<span className="text-[#D4AF37]">
  Fleet Intelligence
</span>
Platform

          </h1>

          <p className="text-slate-500 text-xl max-w-3xl mx-auto mb-10">

            Unified fleet operations, fuel monitoring,
GPS tracking, AI analytics, security and
transport intelligence on a single platform.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="bg-[#0F4C81] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition">
              Explore Platform
            </button>

            <a
              href="#dashboard"
              className="border border-cyan-500 text-[#0F4C81] px-8 py-4 rounded-2xl hover:bg-cyan-500 hover:text-black transition"
            >
              Live Dashboard
            </a>

          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-5 py-3 rounded-full shadow-lg border border-[#D4AF37]/20 text-[#0F4C81] font-semibold">
    ✓ GPS Tracking
  </div>

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-5 py-3 rounded-full shadow-lg border border-[#D4AF37]/20 text-[#0F4C81] font-semibold">
    ✓ Fuel Analytics
  </div>

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-5 py-3 rounded-full shadow-lg border border-[#D4AF37]/20 text-[#0F4C81] font-semibold">
    ✓ AI Monitoring
  </div>

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-5 py-3 rounded-full shadow-lg border border-[#D4AF37]/20 text-[#0F4C81] font-semibold">
    ✓ Enterprise Security
  </div>
   </div>         

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mt-16 max-w-6xl mx-auto"
>

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-[32px] border border-[#D4AF37]/20 shadow-2xl p-10">

    <div className="grid md:grid-cols-4 gap-6">

      {[
        { title: "Vehicles", value: "128" },
        { title: "Fuel Efficiency", value: "94%" },
        { title: "Tracking Accuracy", value: "99.9%" },
        { title: "AI Alerts", value: "12" }
      ].map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
          className="bg-slate-50 rounded-3xl p-6 border border-[#D4AF37]/20"
        >
          <div className="text-slate-500 text-sm">
            {item.title}
          </div>

          <div className="text-4xl font-bold text-[#0F4C81] mt-2">
            {item.value}
          </div>
        </motion.div>
      ))}

    </div>

    <div className="mt-10">

      <div className="flex justify-between mb-2">
        <span className="text-[#0F4C81] font-semibold">
          Fleet Performance
        </span>

        <span className="text-[#D4AF37]">
          94%
        </span>
      </div>

      <div className="h-4 bg-slate-200 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "94%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="h-full bg-[#D4AF37]"
        />

      </div>

    </div>

  </div>

</motion.div>

</motion.div>

</section>

{/* SERVICES */}
<section
  id="services"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-6xl font-extrabold text-[#0F4C81] mb-3">
              Enterprise Services
            </h2>
<p className="text-slate-600 text-lg">
  Intelligent monitoring and compliance management for enterprise fleets.
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
                whileHover={{   scale: 1.03,   y: -8 }}
                className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-[#D4AF37]/20 flex items-center justify-center mb-6 text-[#0F4C81] text-2xl">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
                  {service}
                </h3>

                <p className="text-slate-500">
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
        className="relative py-32 px-6 bg-slate-50 overflow-hidden"
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
              <span className="text-[#0F4C81]">
                ENTERPRISE
              </span>{" "}
              DASHBOARD

            </motion.h2>

            <p className="text-slate-500 text-xl max-w-4xl mx-auto">

              AI-powered enterprise monitoring system with realtime
              fleet intelligence and predictive analytics.

            </p>

          </div>

        <div className="grid xl:grid-cols-[320px_1fr] gap-8">

  {/* SIDEBAR */}

  <div className="rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-white via-slate-50 to-blue-50 shadow-2xl p-8">

    <div className="text-5xl font-black text-[#0F4C81] mb-10">
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
  className={`rounded-2xl px-6 py-5 cursor-pointer transition-all ${
    activeTab === item
      ? "bg-blue-50 border border-[#D4AF37]/30"
      : "bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-slate-200"
  }`}
>
  <div className="text-[#0F4C81] font-bold text-lg">
    {item}
  </div>
</motion.div>

      ))}

    </div>

  </div>
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
                    className="rounded-[30px] bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 shadow-xl p-8"
                  >

                    <div className="text-slate-500 text-lg mb-4">
                      {card.title}
                    </div>

                    <div className="text-6xl font-black text-[#0F4C81]">
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

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h3 className="text-2xl font-bold text-[#0F4C81] mb-8">
        Fuel Consumption Analysis
      </h3>

      <div className="space-y-5">

        {[78, 64, 88, 71, 93].map((v, i) => (

          <div key={i}>

            <div className="flex justify-between mb-2 text-slate-600 font-medium">
              <span>Day {i + 1}</span>
              <span>{v}%</span>
            </div>

            <div className="h-4 bg-slate-50 rounded-full overflow-hidden">

              <div
                className="h-full bg-cyan-400"
                style={{ width: `${v}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h3 className="text-2xl font-bold text-[#0F4C81] mb-8">
        Fleet Activity
      </h3>

      <div className="flex items-end justify-between h-[300px] gap-4">

        {[40, 80, 65, 95, 55, 100, 72].map((h, i) => (

          <div
            key={i}
            className="flex-1 bg-cyan-400 rounded-t-2xl"
            style={{ height: `${h}%` }}
          />

        ))}

      </div>

    </div>

  </div>

)}

{activeTab === "Fleet Tracking" && (

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
      Fleet Tracking
    </h3>
<div className="grid md:grid-cols-4 gap-6">

  <div className="bg-white rounded-3xl p-6 shadow-xl border-l-8 border-green-500">
    <p className="text-gray-500">Running</p>
    <h3 className="text-5xl font-bold text-green-500">182</h3>
    <p className="text-green-500 font-semibold mt-2">▲ +12%</p>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-xl border-l-8 border-yellow-500">
    <p className="text-gray-500">Idle</p>
    <h3 className="text-5xl font-bold text-yellow-500">41</h3>
    <p className="text-yellow-500 font-semibold mt-2">● Waiting</p>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-xl border-l-8 border-red-500">
    <p className="text-gray-500">Stopped</p>
    <h3 className="text-5xl font-bold text-red-500">19</h3>
    <p className="text-red-500 font-semibold mt-2">▼ Attention</p>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-xl border-l-8 border-slate-500">
    <p className="text-gray-500">Offline</p>
    <h3 className="text-5xl font-bold text-slate-500">6</h3>
    <p className="text-slate-500 font-semibold mt-2">Disconnected</p>
 
</div>

    </div>

  </div>

)}

{activeTab === "Battery AI" && (

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
      Battery Intelligence
    </h3>

    <div className="grid md:grid-cols-4 gap-6">

      {["94%", "81%", "72%", "88%"].map((v, i) => (

        <div
          key={i}
          className="bg-slate-50 rounded-2xl p-8 text-center"
        >

          <div className="text-slate-500 mb-4">
            Fleet {i + 1}
          </div>

          <div className="text-5xl font-bold text-[#0F4C81]">
            {v}
          </div>

        </div>

      ))}

    </div>

  </div>

)}
{activeTab === "Fuel Analytics" && (

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
      Fuel Analytics
    </h3>

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-slate-50 p-6 rounded-2xl">
        <div className="text-slate-500">Today's Fuel</div>
        <div className="text-5xl font-bold text-[#0F4C81]">8,450L</div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl">
        <div className="text-slate-500">Average Mileage</div>
        <div className="text-5xl font-bold text-green-400">5.8</div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl">
        <div className="text-slate-500">Fuel Cost</div>
        <div className="text-5xl font-bold text-yellow-400">₹7.2L</div>
      </div>

    </div>

    <div className="space-y-5">

      {[92, 81, 74, 88, 96].map((v, i) => (

        <div key={i}>

          <div className="flex justify-between mb-2 text-slate-600 font-medium">
            <span>Vehicle Group {i + 1}</span>
            <span>{v}%</span>
          </div>

          <div className="h-4 bg-slate-50 rounded-full overflow-hidden">

            <div
              className="h-full bg-cyan-400"
              style={{ width: `${v}%` }}
            />

          </div>

        </div>

      ))}

    </div>

  </div>

)}
              {activeTab === "AI Monitoring" && (

  <div className="space-y-8">

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
        AI Monitoring Center
      </h3>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">Fuel Theft Risk</div>
          <div className="text-5xl font-black text-red-400">3</div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">Route Deviations</div>
          <div className="text-5xl font-black text-yellow-400">12</div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">Idle Vehicles</div>
          <div className="text-5xl font-black text-orange-400">41</div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">AI Accuracy</div>
          <div className="text-5xl font-black text-green-400">98%</div>
        </div>

      </div>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          AI Alerts
        </h4>

        <div className="space-y-4">

          {[
            "Possible fuel theft detected - BDPH-2044",
            "Vehicle idle for 6+ hours - BDPH-1782",
            "Route deviation detected - BDPH-6621",
            "Speed anomaly detected - BDPH-5518",
          ].map((alert, i) => (

            <div
              key={i}
              className="bg-slate-50 border border-red-500/20 rounded-2xl p-4"
            >
              <div className="text-red-400">
                {alert}
              </div>
            </div>

          ))}

        </div>

      </div>

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          AI Recommendations
        </h4>

        <div className="space-y-4">

          {[
            "Reduce idle time at Dumka siding by 12%",
            "Refuel BDPH-6619 within next 4 hours",
            "Reassign 3 vehicles to Kurwa route",
            "Optimize night dispatch schedule",
          ].map((item, i) => (

            <div
              key={i}
              className="bg-slate-50 border border-green-500/20 rounded-2xl p-4"
            >
              <div className="text-green-400">
                {item}
              </div>
            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

)}
              {activeTab === "Security Layer" && (

  <div className="space-y-8">

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
        Security Operations Center
      </h3>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Active Users
          </div>
          <div className="text-5xl font-black text-[#0F4C81]">
            24
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            GPS Devices Online
          </div>
          <div className="text-5xl font-black text-green-400">
            128
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Failed Logins
          </div>
          <div className="text-5xl font-black text-red-400">
            3
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Threat Level
          </div>
          <div className="text-5xl font-black text-yellow-400">
            LOW
          </div>
        </div>

      </div>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          Access Control
        </h4>

        <div className="space-y-4">

          {[
            "Admin Access - Active",
            "Fleet Manager Access - Active",
            "Dispatcher Access - Active",
            "Driver Portal Access - Restricted",
          ].map((item, i) => (

            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-4 border border-cyan-500/10"
            >
              <div className="text-[#0F4C81]">
                {item}
              </div>
            </div>

          ))}

        </div>

      </div>

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          Security Audit Logs
        </h4>

        <div className="space-y-4">

          {[
            "User Login - Admin - 09:22 AM",
            "Vehicle Data Export - 10:05 AM",
            "Fuel Report Access - 10:48 AM",
            "GPS Configuration Updated - 11:15 AM",
          ].map((log, i) => (

            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-4 border border-cyan-500/10"
            >
              <div className="text-slate-600 font-medium">
                {log}
              </div>
            </div>

          ))}

        </div>

      </div>

    </div>

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
        System Protection Status
      </h4>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-green-400 text-lg">
            Firewall
          </div>
          <div className="text-3xl font-bold text-[#0F4C81] mt-2">
            ACTIVE
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-green-400 text-lg">
            GPS Encryption
          </div>
          <div className="text-3xl font-bold text-[#0F4C81] mt-2">
            ENABLED
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-green-400 text-lg">
            Cloud Backup
          </div>
          <div className="text-3xl font-bold text-[#0F4C81] mt-2">
            RUNNING
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-green-400 text-lg">
            Data Integrity
          </div>
          <div className="text-3xl font-bold text-[#0F4C81] mt-2">
            100%
          </div>
        </div>

      </div>

    </div>

  </div>

)}
              {activeTab === "Cloud Sync" && (

  <div className="space-y-8">

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
        Cloud Synchronization Center
      </h3>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Sync Status
          </div>
          <div className="text-5xl font-black text-green-400">
            LIVE
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Last Sync
          </div>
          <div className="text-3xl font-black text-[#0F4C81]">
            2 Min Ago
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Server Health
          </div>
          <div className="text-5xl font-black text-green-400">
            99.9%
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="text-slate-500 mb-2">
            Data Processed
          </div>
          <div className="text-5xl font-black text-[#0F4C81]">
            2.8TB
          </div>
        </div>

      </div>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          Connected Services
        </h4>

        <div className="space-y-4">

          {[
            "Fleet Database",
            "GPS Tracking Server",
            "Fuel Management System",
            "AI Analytics Engine",
            "Notification Gateway",
          ].map((service, i) => (

            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-4 border border-green-500/20 flex justify-between"
            >
              <span className="text-slate-500">
                {service}
              </span>

              <span className="text-green-400">
                Connected
              </span>

            </div>

          ))}

        </div>

      </div>

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

        <h4 className="text-2xl font-bold text-[#0F4C81] mb-6">
          Synchronization Queue
        </h4>

        <div className="space-y-4">

          {[
            "Vehicle Telemetry Upload",
            "Fuel Transaction Sync",
            "Driver Activity Logs",
            "Route Optimization Data",
            "Battery Diagnostics",
          ].map((item, i) => (

            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-4 border border-cyan-500/10"
            >
              <div className="text-slate-600 font-medium">
                {item}
              </div>
            </div>

          ))}

        </div>

      </div>

    </div>

    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

      <h4 className="text-2xl font-bold text-[#0F4C81] mb-8">
        Cloud Infrastructure
      </h4>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-[#0F4C81] text-lg">
            Primary Server
          </div>
          <div className="text-3xl font-bold text-slate-500 mt-2">
            ONLINE
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-[#0F4C81] text-lg">
            Backup Server
          </div>
          <div className="text-3xl font-bold text-slate-500 mt-2">
            ONLINE
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-[#0F4C81] text-lg">
            API Gateway
          </div>
          <div className="text-3xl font-bold text-slate-500 mt-2">
            ACTIVE
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-center">
          <div className="text-[#0F4C81] text-lg">
            Backup Status
          </div>
          <div className="text-3xl font-bold text-green-400 mt-2">
            SUCCESS
          </div>
        </div>

      </div>

    </div>

  </div>

)}
{activeTab === "Settings" && (

  <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-[30px] p-8">

    <h3 className="text-3xl font-bold text-[#0F4C81] mb-8">
      Settings
    </h3>

    <div className="space-y-5">

      <div className="bg-slate-50 p-5 rounded-2xl">
        Company Name: BDPH GROUP
      </div>

      <div className="bg-slate-50 p-5 rounded-2xl">
        Notifications: Enabled
      </div>

      <div className="bg-slate-50 p-5 rounded-2xl">
        GPS Provider: Active
      </div>

      <div className="bg-slate-50 p-5 rounded-2xl">
        Cloud Sync: Connected
      </div>

    </div>

  </div>

)}
            </div> {/* MAIN PANEL */}

          </div> {/* grid xl:grid-cols-[320px_1fr] */}

        </div> {/* max-w */}

      </section>
      {/* ANALYTICS */}
      <section
        id="analytics"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-6xl font-extrabold text-[#0F4C81] mb-3">
              Smart Monitoring System
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Pollution",
                status: "12 Expiring",
                icon: <FileWarning size={36} className="text-red-500" />,
              },
              {
                title: "Insurance",
                status: "48 Active",
               icon: <ShieldCheck size={36} className="text-green-600" />,
              },
              {
                title: "Battery",
                status: "Realtime AI",
                icon: <BatteryCharging size={36} className="text-yellow-500" />,
              },
              {
                title: "GPS Maps",
                status: "Live Tracking",
               icon: <Map size={36} className="text-blue-600" />,
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{   scale: 1.03,   y: -8 }}
                className=" bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#D4AF37] transition-all duration-300 "
              >

                <div className="mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
                  {item.title}
                </h3>

                <div className="text-xl text-slate-600 font-medium">
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
  className="py-32 px-6 bg-slate-50"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <h2 className="text-5xl md:text-7xl font-black mb-6">
        ABOUT{" "}
        <span className="text-[#0F4C81]">
          BDPH GROUP
        </span>
      </h2>

      <p className="text-xl text-slate-500 max-w-4xl mx-auto">
        BDPH Group is developing intelligent enterprise solutions for
        transporters, fleet operators, logistics companies and industrial
        businesses. Our platform integrates GPS tracking, fuel monitoring,
        fleet intelligence, AI analytics and enterprise automation into a
        single ecosystem.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-3xl p-8">
        <div className="text-[#0F4C81] text-4xl mb-6">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
          Mission
        </h3>

        <p className="text-slate-500">
          To simplify transporter operations through intelligent
          automation, AI-driven monitoring and centralized fleet
          management.
        </p>
      </div>

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-3xl p-8">
        <div className="text-[#0F4C81] text-4xl mb-6">
          🚀
        </div>

        <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
          Vision
        </h3>

        <p className="text-slate-500">
          To become India's leading AI-powered enterprise and fleet
          intelligence platform for transport and logistics industries.
        </p>
      </div>

      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-[#D4AF37]/20 rounded-3xl p-8">
        <div className="text-[#0F4C81] text-4xl mb-6">
          ⚡
        </div>

        <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
          Solutions
        </h3>

        <p className="text-slate-500">
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
  className="relative py-32 px-6 bg-slate-50 overflow-hidden"

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
        <span className="text-[#0F4C81]">
          BDPH AI
        </span>

      </motion.h2>

      <p className="text-slate-500 text-xl max-w-4xl mx-auto">

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

<div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-[#0F172A] to-[#0F4C81] p-10 shadow-[0_0_80px_rgba(34,211,238,0.15)] text-white">

  <div className="flex items-center justify-between mb-10">


<div>
  <h3 className="text-4xl font-black">
    Enterprise Operations Center
  </h3>

  <p className="text-cyan-300 mt-2">
    AI Powered Fleet Intelligence Network
  </p>
</div>

<div className="flex gap-2">

  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
    LIVE
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
    ONLINE
  </span>

  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
    SECURED
  </span>

</div>


  </div>

  <div className="grid grid-cols-2 gap-5">


<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/10">
  <p className="text-slate-400 text-sm">Vehicles Connected</p>
  <h4 className="text-4xl font-black text-cyan-400">128</h4>
</div>

<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/10">
  <p className="text-slate-400 text-sm">GPS Accuracy</p>
  <h4 className="text-4xl font-black text-green-400">99.8%</h4>
</div>

<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/10">
  <p className="text-slate-400 text-sm">Cloud Nodes</p>
  <h4 className="text-4xl font-black text-yellow-400">42</h4>
</div>

<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/10">
  <p className="text-slate-400 text-sm">AI Health Score</p>
  <h4 className="text-4xl font-black text-cyan-400">98%</h4>
</div>


  </div>

  <div className="mt-8 space-y-4">


<div className="flex justify-between border-b border-white/10 pb-3">
  <span className="text-slate-400">Corporate HQ</span>
  <span>Bhagalpur, Bihar</span>
</div>

<div className="flex justify-between border-b border-white/10 pb-3">
  <span className="text-slate-400">Support Line</span>
  <span>+91 9122221684</span>
</div>

<div className="flex justify-between border-b border-white/10 pb-3">
  <span className="text-slate-400">Enterprise Email</span>
  <span>info@bdphgroup.com</span>
</div>

<div className="flex justify-between">
  <span className="text-slate-400">Platform</span>
  <span>www.bdphgroup.com</span>
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
          className="rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-8"
        >

          <div className="flex items-center justify-between mb-8">

            <div>

              <div className="text-4xl font-black text-cyan-400 mb-2">
                AI SYSTEM STATUS
              </div>

              <div className="text-slate-500">
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

                <div className="text-slate-500">
                  {item}
                </div>

                <div className="text-green-400 font-semibold">
                  ACTIVE
                </div>

              </div>

            ))}

          </div>

        </motion.div>
      {/* RIGHT SIDE FORM */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-[36px] border border-[#D4AF37]/20 bg-gradient-to-br from-white via-slate-50 to-blue-50/80 backdrop-blur-2xl p-10 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
      >

        <div className="mb-10">

         <div className="text-5xl font-black text-[#0F4C81] mb-4">
  Enterprise Command Center
</div>

<div className="flex gap-2 mt-4">

  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
    LIVE
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">
    AI ACTIVE
  </span>
<span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
  SECURED
</span>
  </div>

         <div className="text-cyan-300 text-lg">
  Connect directly with our AI enterprise operations team.
</div>

</div>   {/* CLOSE mb-10 */}

<div className="space-y-6">
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleInputChange}
  placeholder="Full Name"
  className="w-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition"
/>

         <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  placeholder="Email Address"
  className="w-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition"
/>

         <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleInputChange}
  placeholder="Company Name"
  className="w-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition"
/>
        

         <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleInputChange}
  placeholder="Describe your enterprise requirement..."
  className="w-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition resize-none"
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
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-5 text-center hover:border-cyan-400 transition"
            >

              <div className="text-4xl font-black text-cyan-400 mb-2">
                {item.value}
              </div>

              <div className="text-slate-400 text-sm uppercase tracking-wider">
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

  </div> {/* max-w-7xl */}

</section>
  );
}

export default Home;
