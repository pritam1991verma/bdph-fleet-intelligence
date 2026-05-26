function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">

        {/* LOGO */}

        <div className="flex items-center gap-8">

          <img
            src="/logo.png"
            alt="BDPH Group"
            className="h-16 w-auto object-contain"
          />

          <h1 className="hidden md:block text-xl font-semibold text-white tracking-[0.18em]">
            BDPH GROUP
          </h1>

        </div>

        {/* MENU */}

        <div className="hidden md:flex gap-10 uppercase text-sm tracking-[0.2em] font-semibold text-gray-200">

          <a
            href="#home"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#dashboard"
            className="hover:text-cyan-400 transition duration-300"
          >
            Dashboard
          </a>

          <a
            href="#tracking"
            className="hover:text-cyan-400 transition duration-300"
           >
            Live Tracking
          </a>

          <a
            href="#analytics"
            className="hover:text-cyan-400 transition duration-300"
          >
            Analytics
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
