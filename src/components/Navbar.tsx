import { useEffect, useState } from "react";

function Navbar() {
const [active, setActive] = useState("home");
const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

    const sections = [
      "home",
      "services",
      "dashboard",
      "analytics",
      "tracking",
      "about",
      "contact",
    ];

    const handleScroll = () => {

      let current = "home";

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (section) {

          const top = section.offsetTop - 180;

          if (window.scrollY >= top) {
            current = id;
          }

        }

      });

      setActive(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navItem = (id: string, label: string) => (

    <a
      href={`#${id}`}
      className={`transition duration-300 uppercase text-base font-bold tracking-wide tracking-[0.08em] font-bold
      ${
        active === id
          ? "text-[#D4AF37] font-bold"
          : "text-slate-700 hover:text-[#0F4C81]"
      }`}
    >
      {label}
    </a>

  );

  return (
      <>
<div className="fixed top-0 left-0 w-full bg-[#0F4C81] text-white text-xs z-50 overflow-hidden">

  <div className="w-full py-2">

    <div className="animate-marquee inline-flex gap-16 whitespace-nowrap">

      <span className="text-green-400">● AI ENGINE ONLINE</span>

      <span className="text-cyan-300">● GPS NETWORK ACTIVE</span>

      <span className="text-yellow-300">● CLOUD SYNC STABLE</span>

      <span className="text-green-400">● 128 VEHICLES ONLINE</span>

      <span className="text-cyan-300">● FUEL ANALYTICS ACTIVE</span>

      <span className="text-yellow-300">● AI MONITORING ENABLED</span>

      <span className="text-green-400">● AI ENGINE ONLINE</span>

      <span className="text-cyan-300">● GPS NETWORK ACTIVE</span>

      <span className="text-yellow-300">● CLOUD SYNC STABLE</span>

      <span className="text-green-400">● 128 VEHICLES ONLINE</span>

    </div>

  </div>

</div>
  <nav className="fixed top-8 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg z-50">

<div className="w-full flex justify-between items-center px-4 md:px-12 py-2">
        {/* LOGO */}

       <div className="flex items-center">
  <img
  src="/logo.png"
  alt="BDPH Group"
  className="h-10 md:h-14 w-auto object-contain"
/>
</div>
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-[#0F4C81] text-3xl font-bold"
>
  ☰
</button>
        {/* MENU */}
  
<div className="hidden md:flex items-center gap-8 whitespace-nowrap">
          {navItem("home", "Home")}

          {navItem("services", "Services")}

          {navItem("dashboard", "Dashboard")}

          {navItem("analytics", "Analytics")}

          {navItem("tracking", "Live Tracking")}

          {navItem("about", "About")}

          {navItem("contact", "Contact")}
          <div className="ml-8 flex items-center gap-2">

  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

  <span className="text-[#0F4C81] font-bold text-base">
    128 Vehicles Online
  </span>

</div>
          <button className="ml-4 px-8 py-3 bg-[#0F4C81] text-white rounded-xl font-bold text-lg hover:scale-105 transition">
  Request Demo
</button>

        </div>

      </div>
{menuOpen && (
  <div className="md:hidden bg-white border-t border-[#D4AF37]/20">

    <div className="flex flex-col p-4 gap-4">

      {navItem("home", "Home")}
      {navItem("services", "Services")}
      {navItem("dashboard", "Dashboard")}
      {navItem("analytics", "Analytics")}
      {navItem("tracking", "Live Tracking")}
      {navItem("about", "About")}
      {navItem("contact", "Contact")}

      <button className="w-full mt-2 px-6 py-3 bg-[#0F4C81] text-white rounded-xl font-bold">
        Request Demo
      </button>

    </div>

  </div>
)}
   </nav>
</>

  );
}

export default Navbar;
