import { useEffect, useState } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

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
      className={`transition duration-300 uppercase text-sm tracking-[0.12em] font-semibold
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

    <>   <div className="fixed top-0 left-0 w-full bg-[#0F4C81] text-white text-xs z-50">     <div className="max-w-7xl mx-auto flex justify-between px-8 py-2">        <div className="flex gap-8">         <span className="text-green-400">● AI ENGINE ONLINE</span>         <span className="text-cyan-300">● GPS NETWORK ACTIVE</span>         <span className="text-yellow-300">● CLOUD SYNC STABLE</span>       </div>        <div className="text-slate-200">         Enterprise Fleet Intelligence Platform       </div>      </div>   </div>    <nav className="fixed top-8 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg z-50">

      <div className="w-full flex justify-between items-center px-16 py-3">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="BDPH Group"
            className="h-16 w-auto object-contain"
          />

        </div>

        {/* MENU */}

        <div className="hidden md:flex items-center gap-7 whitespace-nowrap">

          {navItem("home", "Home")}

          {navItem("services", "Services")}

          {navItem("dashboard", "Dashboard")}

          {navItem("analytics", "Analytics")}

          {navItem("tracking", "Live Tracking")}

          {navItem("about", "About")}

          {navItem("contact", "Contact")}
          <div className="ml-8 flex items-center gap-2">

  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

  <span className="text-[#0F4C81] font-semibold text-sm">
    128 Vehicles Online
  </span>

</div>
          <button className="ml-4 px-5 py-2 bg-[#0F4C81] text-white rounded-xl font-semibold hover:scale-105 transition">
  Request Demo
</button>

        </div>

      </div>

   </nav>
</>

  );
}

export default Navbar;
