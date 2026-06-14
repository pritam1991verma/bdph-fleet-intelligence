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

          const top = section.offsetTop - 120;

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
      className={`transition duration-300 uppercase text-sm tracking-[0.18em] font-semibold
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

    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="BDPH Group"
            className="h-16 w-auto object-contain"
          />

        </div>

        {/* MENU */}

        <div className="hidden md:flex gap-8">

          {navItem("home", "Home")}

          {navItem("services", "Services")}

          {navItem("dashboard", "Dashboard")}

          {navItem("analytics", "Analytics")}

          {navItem("tracking", "Live Tracking")}

          {navItem("about", "About")}

          {navItem("contact", "Contact")}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;
